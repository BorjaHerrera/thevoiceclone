import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogEnPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-20">
      <div className="container px-4 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight mb-8">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Coming soon: articles on multimedia localisation, AI and global content production.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default BlogEnPage;
