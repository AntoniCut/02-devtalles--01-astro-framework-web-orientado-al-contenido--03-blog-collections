/*
    *  --------------------------------------------------------------  *
    *  -----  base-project.ts  --  /src/config/base-project.ts  -----  *
    *  --------------------------------------------------------------  *
*/


/**  -----  `Base URL del proyecto` (sin trailing slash) ----- */
export const base: string = (
    import.meta.env.PUBLIC_BASE_URL || import.meta.env.BASE_URL || ''
).replace(/\/$/, '');
