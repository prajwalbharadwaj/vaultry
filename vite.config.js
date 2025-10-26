import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

const enabledCollections = ['mdi', 'tabler', 'vscode-icons'];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue({ include: [/\.vue$/] }),
    tailwindcss(),
    vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros'],
      resolvers: [
        IconsResolver({
          componentPrefix: 'icon',
          enabledCollections,
        }),
      ],
      dts: false,
    }),
    Components({
      // relative paths to the directory to search for components
      dirs: ['src/common/components', 'node_modules/primevue/**/*'],
      // dirs: ['src/**/components', 'static/icons', 'node_modules/primevue/**/*'],

      // allow auto load components under `./src/components/`
      extensions: ['vue'],
      // search for subdirectories
      deep: true,
      dts: false,
      // allow auto import and register components
      include: [/\.vue$/, /\.vue\?vue/],
      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          prefix: 'icon',
          enabledCollections,
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
