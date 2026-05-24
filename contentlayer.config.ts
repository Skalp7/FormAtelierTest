import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    client: { type: "string", required: true },
    year: { type: "string", required: true },
    sector: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    cover: { type: "string", required: true },
    services: { type: "list", of: { type: "string" }, required: true },
    technologies: { type: "list", of: { type: "string" }, required: true },
    stats: { type: "json", required: true },
    order: { type: "number", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("projects/", "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/projects/${doc._raw.flattenedPath.replace("projects/", "")}`
    }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project]
});
