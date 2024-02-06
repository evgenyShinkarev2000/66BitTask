import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://localhost:7211/graphql/sdl:443",
  documents: ['src/apollo/*.ts'],
  generates: {
    './src/apollo/__generated__/':
    {
      preset: 'client',
      plugins:
        [
          {
            add:
            {
              content: '//@ts-nocheck'
            }
          },
          "typescript"
        ],
      presetConfig:
      {
        gqlTagName: 'gql',
        fragmentMasking: false,
      }
    },
  },
  ignoreNoDocuments: true,
};

export default config;