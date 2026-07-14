/*
    *  -----------------------------------------------------------  *
    *  -----  content.config.ts  --  /src/content.config.ts  -----  *
    *  -----------------------------------------------------------  *
*/


import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';



/** - `Blog - Coleccion` */
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
        //author: z.string(),
        author: reference('author'),

        //  -----  relación  -----
        tags: z.array(z.string()),

        isDraft: z.boolean().default(false),
    })

});



/** - `Author - Coleccion` */
const authorCollection = defineCollection({
    
    loader: glob({ 
        pattern: '**/*.{yml,yaml}', 
        base: './src/content/author' 
    }),


    schema: ({ image }) => z.object({
        
        name: z.string(),
        avatar: image(),
        subtitle: z.string().optional(),
        bio: z.string().optional(),
        twitter: z.string().optional(),
        linkedIn: z.string().optional(),
        github: z.string().optional(),

    })

});



/** - `Todas las colecciones` */
export const collections = { 
    
    blog: blogCollection,
    author: authorCollection

};
