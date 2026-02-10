import type { CodegenConfig } from "@graphql-codegen/cli";

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: "https://shopify.dev/admin-graphql-direct-proxy/2026-01",
//   documents: ["src/**/*.ts"],
//   ignoreNoDocuments: true,
//   generates: {
//     "src/generated/graphql.ts": {
//       plugins: ["typescript"],
//     },
//     "src/types": {
//       preset: "client",
//       config: {
//         documentMode: "string",
//       },
//     },
//   },
// };

const config: CodegenConfig = {
  schema: "https://shopify.dev/admin-graphql-direct-proxy/2026-01",
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
    "./src/generated/graphql.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
