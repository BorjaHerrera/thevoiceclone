import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRouter } from "next/router";

interface VideoItem {
  id: string;
  youtubeId: string;
  titleEs: string;
  titleEn: string;
}

const VIDEO_REGISTRY: Record<string, { titleEs: string; titleEn: string }> = {
  QeDAESHmZBU: {
    titleEs: "AI Voices. Human Touch",
    titleEn: "AI Voices. Human Touch",
  },
  S17marPSB8g: {
    titleEs: "La eficiencia de la IA combinada con la precisión humana",
    titleEn: "AI efficiency combined with human precision",
  },
  "tbD-8HViFl4": {
    titleEs: "Vídeos corporativos hechos con IA",
    titleEn: "Corporate videos made with AI",
  },
  wyMLE_um2Sk: {
    titleEs: "Localización de vídeo con IA",
    titleEn: "Video localization with AI",
  },
  lHSTqk_1uc4: {
    titleEs: "Subtitulado multilingüe profesional",
    titleEn: "Professional multilingual subtitling",
  },
  gWnV2XRaUv0: {
    titleEs: "Voces IA para tu marca",
    titleEn: "AI voices for your brand",
  },
  "7Hlge9Q_8iQ": {
    titleEs: "Producción de vídeo con IA",
    titleEn: "AI video production",
  },
  Ohr6Kw1Qmx0: {
    titleEs: "Localización audiovisual profesional",
    titleEn: "Professional audiovisual localization",
  },
  yDDZg_Qh4Rs: {
    titleEs: "Traducción y subtitulado con IA",
    titleEn: "AI translation and subtitling",
  },
};

const DEFAULT_VIDEO_IDS: [string, string, string] = [
  "QeDAESHmZBU",
  "S17marPSB8g",
  "tbD-8HViFl4",
];

function makeVideoItems(ids: [string, string, string]): VideoItem[] {
  return ids.map((youtubeId, i) => {
    const meta = VIDEO_REGISTRY[youtubeId] ?? {
      titleEs: youtubeId,
      titleEn: youtubeId,
    };
    return { id: String(i + 1), youtubeId, ...meta };
  });
}

const copy = {
  es: {
    heading: "Casos de éxito: El futuro de la producción de vídeo.",
    description:
      "Descubre cómo transformamos tus contenidos de formación, publicidad y comunicación corporativa al combinar la agilidad de la IA con la experiencia de nuestros expertos.",
    pill: "Proyectos Destacados",
    prev: "Anterior",
    next: "Siguiente",
  },
  en: {
    heading: "Success Stories: The Future of Video Production.",
    description:
      "Discover how we transform your training, advertising and corporate communication content by combining the agility of AI with the expertise of our specialists.",
    pill: "Featured Projects",
    prev: "Previous",
    next: "Next",
  },
};

const EMBED_PARAMS = "autoplay=1&rel=0&enablejsapi=1&origin=https://thevoiceclone.com";

/** Envía un comando de pausa al iframe de YouTube vía postMessage */
function pauseYouTubeIframe(iframe: HTMLIFrameElement | null) {
  if (!iframe) return;
  iframe.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
    "*"
  );
}

const VideoCard = ({
  video,
  onPlay,
  isPlaying,
  isEn,
}: {
  video: VideoItem;
  onPlay: () => void;
  isPlaying: boolean;
  isEn: boolean;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const title = isEn ? video.titleEn : video.titleEs;

  // Pausa el vídeo cuando isPlaying pasa a false o cuando el componente se desmonta
  useEffect(() => {
    if (!isPlaying) {
      pauseYouTubeIframe(iframeRef.current);
    }
    return () => {
      pauseYouTubeIframe(iframeRef.current);
    };
  }, [isPlaying]);

  return (
    <div
      className="relative rounded-3xl overflow-hidden cursor-pointer group aspect-square"
      onClick={!isPlaying ? onPlay : undefined}
    >
      {isPlaying ? (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${video.youtubeId}?${EMBED_PARAMS}`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <p className="text-white font-semibold text-sm leading-snug">
              {title}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const VideoPortfolio = ({
  videoIds,
}: {
  videoIds?: [string, string, string];
}) => {
  const ids = videoIds ?? DEFAULT_VIDEO_IDS;
  const videos = makeVideoItems(ids);

  const [startIndex, setStartIndex] = useState(0);
  // Estado separado para cada layout: evita que ambos monten el iframe a la vez
  const [playingDesktopId, setPlayingDesktopId] = useState<string | null>(null);
  const [playingMobileId, setPlayingMobileId] = useState<string | null>(null);
  const router = useRouter();
  const isEn = router.locale === "en";
  const t = isEn ? copy.en : copy.es;

  const getVisibleVideos = useCallback(() => {
    const result: VideoItem[] = [];
    for (let i = 0; i < 3; i++) {
      result.push(videos[(startIndex + i) % videos.length]);
    }
    return result;
  }, [startIndex, videos]);

  const scrollPrev = () => {
    setPlayingDesktopId(null);
    setPlayingMobileId(null);
    setStartIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const scrollNext = () => {
    setPlayingDesktopId(null);
    setPlayingMobileId(null);
    setStartIndex((prev) => (prev + 1) % videos.length);
  };

  const visibleVideos = getVisibleVideos();

  // visibleVideos[0] = V1 (featured, large center)
  // visibleVideos[1] = V2 (left, small)
  // visibleVideos[2] = V3 (right, small)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-6">
              {t.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          {/* Pill tab */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex rounded-full border border-border p-1 bg-card">
              <button className="px-5 py-2 rounded-full text-sm font-semibold bg-foreground text-background shadow-sm">
                {t.pill}
              </button>
            </div>
          </motion.div>

          {/* Desktop staircase layout — V1 grande en el centro */}
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="hidden md:flex gap-2 items-start justify-center"
            >
              {/* V2 — izquierda pequeño */}
              <div className="flex flex-col gap-3 w-[28%] shrink-0">
                <VideoCard
                  video={visibleVideos[1]}
                  isPlaying={playingDesktopId === visibleVideos[1].id}
                  onPlay={() => setPlayingDesktopId(visibleVideos[1].id)}
                  isEn={isEn}
                />
                <button
                  onClick={scrollPrev}
                  className="self-start w-14 h-14 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                  aria-label={t.prev}
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* V1 — centro grande */}
              <div className="w-[40%] shrink-0 mt-[3%]">
                <VideoCard
                  video={visibleVideos[0]}
                  isPlaying={playingDesktopId === visibleVideos[0].id}
                  onPlay={() => setPlayingDesktopId(visibleVideos[0].id)}
                  isEn={isEn}
                />
              </div>

              {/* V3 — derecha pequeño */}
              <div className="flex flex-col gap-3 w-[28%] shrink-0 mt-[12%]">
                <button
                  onClick={scrollNext}
                  className="self-end w-14 h-14 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                  aria-label={t.next}
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
                <VideoCard
                  video={visibleVideos[2]}
                  isPlaying={playingDesktopId === visibleVideos[2].id}
                  onPlay={() => setPlayingDesktopId(visibleVideos[2].id)}
                  isEn={isEn}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile — usa playingMobileId, completamente independiente del desktop */}
          <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 scrollbar-hide">
            {videos.map((video) => (
              <div key={video.id} className="snap-center shrink-0 w-[75vw]">
                <VideoCard
                  video={video}
                  isPlaying={playingMobileId === video.id}
                  onPlay={() => setPlayingMobileId(video.id)}
                  isEn={isEn}
                />
              </div>
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-3 mt-6">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
              aria-label={t.prev}
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
              aria-label={t.next}
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;
