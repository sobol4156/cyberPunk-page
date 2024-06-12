import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {ghPages} from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    vue(),
    ghPages({
      branch: 'gh-pages',
      dir:'dist'
    }
    )
  ],
  base: '/cyberpunk-page/' 
});
