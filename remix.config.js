/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server: "./app/entry.server.tsx",
  serverBuildPath: "api/index.js",
  serverBuildTarget: "vercel",
  // When running locally in development, we use the built in remix
  // server. This does not understand the vercel lambda module format.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverDependenciesToBundle: [
    /^rehype.*/,
    /^remark.*/,
    /^unified.*/,
  ],
};
