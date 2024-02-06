import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import graphQLCodegen from "vite-plugin-graphql-codegen";
import tsConfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    graphQLCodegen({
      runOnBuild: false,
      configFilePathOverride: "GraphQLCodegen.ts"
    }),
  ],
})
