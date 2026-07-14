/*
    *  --------------------------------------------------  *
    *  -----  blog.ts  --  /src/interfaces/blog.ts  -----  *
    *  --------------------------------------------------  *
*/


import type { CollectionEntry } from 'astro:content';

/** -----  Blog Frontmatter Interface  ----- */
export interface BlogFrontmatter {
    
    title: string;
    description: string;
    date: Date;
    author: CollectionEntry<'author'>['id'];
    image: string;
    tags?: string[];
    
}
