// Prefix a root-absolute path with the deploy base, so the same code works
// locally (base "/") and under the GitHub Pages subpath ("/okan-innovations").
//   u('/contact') -> '/contact'  locally,  '/okan-innovations/contact'  on Pages
export const u = (p: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '');
