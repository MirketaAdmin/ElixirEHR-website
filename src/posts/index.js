import { postTypes } from './types';

/*
 * Post registry. Every `src/posts/<type>/<slug>.js` file is one post: its folder is the type and
 * its file name is the slug, so publishing a post means adding a file (and its images under
 * `src/assets/posts/<type>/<slug>/`). No route or page needs to change.
 *
 * `<type>/_shared.js` holds defaults merged into every post of that type (e.g. the press-release
 * media contact and company boilerplate). Files in `<type>/_demo/` are test content: they load in
 * development (or when VITE_SHOW_DEMO_POSTS=true) and are left out of production builds.
 */
const SHOW_DEMO_POSTS = import.meta.env.DEV || import.meta.env.VITE_SHOW_DEMO_POSTS === 'true';

const postModules = import.meta.glob(['./*/*.js', '!./*/_*.js'], { eager: true, import: 'default' });
const sharedModules = import.meta.glob('./*/_shared.js', { eager: true, import: 'default' });
const demoModules = SHOW_DEMO_POSTS
  ? import.meta.glob('./*/_demo/*.js', { eager: true, import: 'default' })
  : {};

function toPost(file, data, demo) {
  const segments = file.split('/');
  const type = segments[1];
  const slug = segments.at(-1).replace(/\.js$/, '');
  if (!postTypes[type]) throw new Error(`Unknown post type folder "${type}" (${file})`);
  return { ...sharedModules[`./${type}/_shared.js`], ...data, type, slug, id: `${type}/${slug}`, demo };
}

const allPosts = [
  ...Object.entries(postModules).map(([file, data]) => toPost(file, data, false)),
  ...Object.entries(demoModules).map(([file, data]) => toPost(file, data, true)),
].sort((a, b) => b.publishDate.localeCompare(a.publishDate));

/** Every post of every type, newest first. */
export function getAllPosts() {
  return allPosts;
}

/** Posts of one type, newest first (by publish date, never file order). */
export function getPosts(type) {
  return allPosts.filter((post) => post.type === type);
}

export function getPost(type, slug) {
  return allPosts.find((post) => post.type === type && post.slug === slug) ?? null;
}

/** Public URL of a post: /<type path>/<slug>. */
export function getPostPath(post) {
  return `/${postTypes[post.type].path}/${post.slug}`;
}

/** The newest posts of the same type, excluding `post` itself. */
export function getLatestPosts(post, limit = 3) {
  return getPosts(post.type)
    .filter((item) => item.slug !== post.slug)
    .slice(0, limit);
}

export { postTypes };
