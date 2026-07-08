/*
    *  ----------------------------------------------------------  *
    *  -----  markdown.ts  --  /src/interfaces/markdown.ts  -----  *
    *  ----------------------------------------------------------  *
*/



import type { BlogFrontmatter } from '@interfaces/blog.ts';


/** -----  Markdown Post Interface  ----- */
export interface MarkdownPost {
    
    frontmatter: BlogFrontmatter;
    url: string;
    
}
