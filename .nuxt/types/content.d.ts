declare module '#content/server' {
  const serverQueryContent: typeof import('/project/workspace/node_modules/@nuxt/content/dist/runtime/legacy/types').serverQueryContent
  const parseContent: typeof import('/project/workspace/node_modules/@nuxt/content/dist/runtime/server').parseContent
}