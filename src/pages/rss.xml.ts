/*
    *  ---------------------------------------------------  *
    *  -----  rss.xml.ts  --  /src/pages/rss.xml.ts  -----  *
    *  ---------------------------------------------------  *
*/


import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';



/** -----  Get the RSS feed  ----- */
export const GET: APIRoute = async ({ site }) => {


    /** -----  obtener los posts del blog  ----- */
    const blogPosts = await getCollection('blog', (post) => post.data.isDraft === false);

    
    return rss({
        
        stylesheet: '/styles/rss.xsl',
        title: 'AntonyDev’s Blog',
        description: 'Un blog sobre desarrollo web, tecnología y programación con Astro',
        site: site ?? '',
        
        items: blogPosts.map( (post) => ({
            
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/posts/${post.id}`,
            categories: post.data.tags,
            
        })),
        
        customData: `<language>es-ES</language>`,
        
    });

};
