/*
    *  ---------------------------------------------------  *
    *  -----  rss.xml.ts  --  /src/pages/rss.xml.ts  -----  *
    *  ---------------------------------------------------  *
*/


import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';


const parser = new MarkdownIt();


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

            content: sanitizeHtml(parser.render(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
              }),
              
              customData: `<media:content
                  type="image/${post.data.image.format === 'jpg' ? 'jpeg' : 'png'}"
                  width="${post.data.image.width}"
                  height="${post.data.image.height}"
                  medium="image"
                  url="${site + post.data.image.src}" />
              `,

        })),
        
        customData: `<language>es-ES</language>`,
        
    });

};
