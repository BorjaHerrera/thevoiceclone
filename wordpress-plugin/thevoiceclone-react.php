<?php
/**
 * Plugin Name: The Voice Clone React App
 * Description: Incrusta la aplicación React de The Voice Clone mediante shortcodes.
 * Version:     1.3.0
 * Author:      The Voice Clone
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'TVC_REACT_BASE_URL', get_site_url() . '/wp-content/react-app/' );

/**
 * Fix quirúrgico: neutraliza únicamente border y outline que WordPress inyecta
 * en botones y en el acordeón FAQ. No toca background, padding, font-size
 * ni ningún otro estilo para no romper el diseño.
 */
function tvc_register_accordion_fix() {
    wp_register_style( 'tvc-accordion-fix', false );
    wp_enqueue_style( 'tvc-accordion-fix' );

    $css = '
        #tvc-react-root button {
            outline: none !important;
            border: none !important;
            white-space: normal !important;
        }
        #tvc-react-root button:hover,
        #tvc-react-root button:focus {
            outline: none !important;
            box-shadow: none !important;
        }
        #tvc-react-root [data-radix-collection-item],
        #tvc-react-root [data-radix-collection-item]:hover,
        #tvc-react-root [data-radix-collection-item]:focus {
            color: inherit !important;
            background-color: transparent !important;
        }
    ';

    wp_add_inline_style( 'tvc-accordion-fix', $css );
}

/**
 * Encola los assets de la app React solo cuando se usa el shortcode.
 */
function tvc_enqueue_react_assets() {
    $manifest_path = ABSPATH . 'wp-content/react-app/assets/';

    $js_files  = glob( $manifest_path . 'index-*.js' );
    $css_files = glob( $manifest_path . 'index-*.css' );

    tvc_register_accordion_fix();

    if ( ! empty( $js_files ) ) {
        wp_enqueue_script(
            'tvc-react-app',
            TVC_REACT_BASE_URL . 'assets/' . basename( $js_files[0] ),
            [],
            null,
            true
        );
    }

    if ( ! empty( $css_files ) ) {
        wp_enqueue_style(
            'tvc-react-app',
            TVC_REACT_BASE_URL . 'assets/' . basename( $css_files[0] ),
            [ 'tvc-accordion-fix' ],
            null
        );
    }
}

/**
 * Shortcode genérico: [react_page page="voces-ia"]
 */
function tvc_react_page_shortcode( $atts ) {
    $atts = shortcode_atts( [ 'page' => 'index' ], $atts, 'react_page' );
    tvc_enqueue_react_assets();
    return '<div id="tvc-react-root" data-page="' . esc_attr( $atts['page'] ) . '"></div>';
}
add_shortcode( 'react_page', 'tvc_react_page_shortcode' );

/**
 * Shortcodes individuales por página.
 *
 *   [tvc_inicio]                   → /
 *   [tvc_video_empresas]           → /video-para-empresas
 *   [tvc_localizacion_video]       → /localizacion-de-video
 *   [tvc_produccion_video_ia]      → /produccion-video-con-ia
 *   [tvc_localizacion_audiovisual] → /localizacion-audiovisual
 *   [tvc_voces_ia]                 → /voces-ia
 *   [tvc_subtitulado_video]        → /subtitulado-video
 *   [tvc_traduccion]               → /traduccion-profesional
 *   [tvc_faq]                      → /preguntas-frecuentes
 *   [tvc_contacto]                 → /contacto
 *   [tvc_blog]                     → /blog
 *   [tvc_aviso_legal]              → /aviso-legal
 *   [tvc_politica_cookies]         → /politica-cookies
 */
$tvc_pages = [
    'tvc_inicio'                   => 'index',
    'tvc_video_empresas'           => 'video-para-empresas',
    'tvc_localizacion_video'       => 'localizacion-de-video',
    'tvc_produccion_video_ia'      => 'produccion-video-con-ia',
    'tvc_localizacion_audiovisual' => 'localizacion-audiovisual',
    'tvc_voces_ia'                 => 'voces-ia',
    'tvc_subtitulado_video'        => 'subtitulado-video',
    'tvc_traduccion'               => 'traduccion-profesional',
    'tvc_faq'                      => 'preguntas-frecuentes',
    'tvc_contacto'                 => 'contacto',
    'tvc_blog'                     => 'blog',
    'tvc_aviso_legal'              => 'aviso-legal',
    'tvc_politica_cookies'         => 'politica-cookies',
];

foreach ( $tvc_pages as $shortcode => $page_id ) {
    add_shortcode( $shortcode, function() use ( $page_id ) {
        tvc_enqueue_react_assets();
        return '<div id="tvc-react-root" data-page="' . esc_attr( $page_id ) . '"></div>';
    });
}
