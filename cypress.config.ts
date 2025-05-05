import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '',
          sourceRoot: 'projects/component-lib-2/src/lib',
          buildOptions: {
            outputPath: 'dist/component-lib-2',
          },
        },
      },
    },
    specPattern: '**/*.cy.ts',
  },
});
