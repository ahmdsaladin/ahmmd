// vite.config.js
import { vitePlugin as remix } from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///C:/Users/Ahmd/Desktop/ahmmd/node_modules/@mapbox/rehype-prism/index.js";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 7777
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remix({
      ssr: true,
      serverBuildPath: "build/worker.js",
      buildDirectory: "build",
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ],
  ssr: {
    noExternal: ["@aws-sdk/client-ses"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBaG1kXFxcXERlc2t0b3BcXFxcYWhtbWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFobWRcXFxcRGVza3RvcFxcXFxhaG1tZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWhtZC9EZXNrdG9wL2FobW1kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGpzY29uZmlnUGF0aHMgZnJvbSAndml0ZS1qc2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgbWR4IGZyb20gJ0BtZHgtanMvcm9sbHVwJztcbmltcG9ydCByZW1hcmtGcm9udG1hdHRlciBmcm9tICdyZW1hcmstZnJvbnRtYXR0ZXInO1xuaW1wb3J0IHJlbWFya01keEZyb250bWF0dGVyIGZyb20gJ3JlbWFyay1tZHgtZnJvbnRtYXR0ZXInO1xuaW1wb3J0IHJlaHlwZUltZ1NpemUgZnJvbSAncmVoeXBlLWltZy1zaXplJztcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJztcbmltcG9ydCByZWh5cGVQcmlzbSBmcm9tICdAbWFwYm94L3JlaHlwZS1wcmlzbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5nbGInLCAnKiovKi5oZHInLCAnKiovKi5nbHNsJ10sXG4gIGJ1aWxkOiB7XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDEwMjQsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDc3NzcsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBtZHgoe1xuICAgICAgcmVoeXBlUGx1Z2luczogW1tyZWh5cGVJbWdTaXplLCB7IGRpcjogJ3B1YmxpYycgfV0sIHJlaHlwZVNsdWcsIHJlaHlwZVByaXNtXSxcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtGcm9udG1hdHRlciwgcmVtYXJrTWR4RnJvbnRtYXR0ZXJdLFxuICAgICAgcHJvdmlkZXJJbXBvcnRTb3VyY2U6ICdAbWR4LWpzL3JlYWN0JyxcbiAgICB9KSxcbiAgICByZW1peCh7XG4gICAgICBzc3I6IHRydWUsXG4gICAgICBzZXJ2ZXJCdWlsZFBhdGg6ICdidWlsZC93b3JrZXIuanMnLFxuICAgICAgYnVpbGREaXJlY3Rvcnk6ICdidWlsZCcsXG4gICAgICByb3V0ZXMoZGVmaW5lUm91dGVzKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVSb3V0ZXMocm91dGUgPT4ge1xuICAgICAgICAgIHJvdXRlKCcvJywgJ3JvdXRlcy9ob21lL3JvdXRlLmpzJywgeyBpbmRleDogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIGpzY29uZmlnUGF0aHMoKSxcbiAgXSxcbiAgc3NyOiB7XG4gICAgbm9FeHRlcm5hbDogWydAYXdzLXNkay9jbGllbnQtc2VzJ10sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlEsU0FBUyxjQUFjLGFBQWE7QUFDalQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8saUJBQWlCO0FBRXhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLGVBQWUsQ0FBQyxZQUFZLFlBQVksV0FBVztBQUFBLEVBQ25ELE9BQU87QUFBQSxJQUNMLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsZUFBZSxDQUFDLENBQUMsZUFBZSxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsWUFBWSxXQUFXO0FBQUEsTUFDM0UsZUFBZSxDQUFDLG1CQUFtQixvQkFBb0I7QUFBQSxNQUN2RCxzQkFBc0I7QUFBQSxJQUN4QixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixLQUFLO0FBQUEsTUFDTCxpQkFBaUI7QUFBQSxNQUNqQixnQkFBZ0I7QUFBQSxNQUNoQixPQUFPLGNBQWM7QUFDbkIsZUFBTyxhQUFhLFdBQVM7QUFDM0IsZ0JBQU0sS0FBSyx3QkFBd0IsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLFFBQ3BELENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFlBQVksQ0FBQyxxQkFBcUI7QUFBQSxFQUNwQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
