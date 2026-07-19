/**
 * Returns the correct image path for both local dev and GitHub Pages deployment.
 * On GitHub Pages, images live under /Portfolio/images/...
 * Locally, they live under /images/...
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function img(src: string): string {
  return `${BASE_PATH}${src}`;
}
