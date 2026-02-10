import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://shopify.dev/admin-graphql-direct-proxy/2026-01",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
