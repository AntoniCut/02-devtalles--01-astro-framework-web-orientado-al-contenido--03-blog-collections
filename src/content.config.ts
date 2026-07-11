/*
    *  -----------------------------------------------------------  *
    *  -----  content.config.ts  --  /src/content.config.ts  -----  *
    *  -----------------------------------------------------------  *
*/


import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';


/** -----  Blog Collection  ----- */
const blogCollection = defineCollection({
    
    loader: glob({ 
        pattern: '**/*.{md,mdx}', 
        base: './src/content/blog' 
    }),
    
    schema: ({ image }) => z.object({
        
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        image: image(),
        
        //  -----  relación  -----
        author: z.string(),

        //  -----  relación  -----
        tags: z.array(z.string()),
    })

});


export const collections = { 
    
    /**  -----  Nombre del directorio de la colección  ----- */
    blog: blogCollection 
};
