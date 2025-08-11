import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
    rollupOptions: {
      // Disable code splitting for Cloudflare Pages
      output: {
        inlineDynamicImports: false,
      }
    },
  },
  server: {
    port: 7777,
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remix({
      ssr: true,
      serverBuildPath: 'build/worker.js',
      buildDirectory: 'build',
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
      // Disable code splitting for Cloudflare Pages
      serverModuleFormat: 'cjs',
    }),
    jsconfigPaths(),
  ],
  ssr: {
    // Mark AWS SDK as external to prevent bundling issues
    noExternal: ['@aws-sdk/client-ses', '@aws-sdk/core'],
    target: 'webworker',
  },
});
