/*
    *  -----------------------------------------------------  *
    *  -----  astro.config.mjs  --  /astro.config.mjs  -----  *
    *  -----------------------------------------------------  *
*/


// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({

    base: '/01-astro-framework-web-orientado-al-contenido/03-blog-collections',
    
    vite: {
        plugins: [tailwindcss()],
    },

    site: 'https://antonydev-blog-collections.netlify.app/',

    integrations: [mdx()],
});