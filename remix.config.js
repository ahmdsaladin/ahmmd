/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server: "./app/entry.server.tsx",
  serverBuildPath: "api/index.js",
  serverBuildTarget: "vercel",
  // When running locally in development, we use the built-in remix server
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  
  // Bundle these dependencies to work around ESM/CJS issues
  serverDependenciesToBundle: [
    /^rehype.*/,
    /^remark.*/,
    /^unified.*/,
    /^@aws-sdk\/.*/,  // Add AWS SDK if you're using it
    /^@remix-run\/.*/, // Ensure all Remix packages are bundled
    /^is-bot/,
    /^framer-motion/,
    /^three/,
    /^three-stdlib/,
  ],
  
  // Enable source maps for better debugging
  sourcemap: true,
  
  // Watch additional files for changes in development
  watchPaths: ['./public/**/*', './app/**/*.css'],
  
  // Optimize the build for Vercel
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
