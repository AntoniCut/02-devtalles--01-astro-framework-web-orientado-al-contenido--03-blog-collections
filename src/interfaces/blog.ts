/*
    *  --------------------------------------------------  *
    *  -----  blog.ts  --  /src/interfaces/blog.ts  -----  *
    *  --------------------------------------------------  *
*/


/** -----  Blog Frontmatter Interface  ----- */
export interface BlogFrontmatter {
    
    title: string;
    description: string;
    date: Date;
    author: string;
    image: string;
    tags?: string[];
    
}
