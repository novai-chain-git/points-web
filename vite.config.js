import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy';
import { compression } from 'vite-plugin-compression2'
// 为了解决 @sadoprotocol/ordit-sdk
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from "path";

// https://vitejs.dev/config/
export default (config) => {
  const envData = loadEnv(config.mode, process.cwd());
  console.log('envData：', envData);
  return defineConfig({
    base: '',
    outDir: 'dist',
		esbuild: {
			// 删除 console debugger
			drop: envData.VITE_DROP_CONSOLE ? ['console', 'debugger'] : []
		},
    build: {
      assetsDir: 'static',
    },
		css: {
			preprocessorOptions: {
				less: {
					/* modifyVars: {
						'@device-width': '375px',
						'@rem': '375px / 10',
					}, */
					javascriptEnabled: true,
				},
			},
		},
    server: {
      host: '0.0.0.0',
      port: 5200,
			proxy: {
				'/app-api': {
        //  target: 'http://192.168.101.50:18080',
        //target: 'http://192.168.101.44:8545',
        //  target: 'http://192.168.101.44:1317',
        target: 'https://points-test.novaichain.com',
        changeOrigin: true,
      },
			}
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    },
    plugins: [
      vue(),
      UnoCSS(),
			nodePolyfills(),
      Components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [ElementPlusResolver({
          importStyle: 'sass'
        })],
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        include: [
          /\.[j]sx?$/,
          /\.vue$/,
          /\.vue\?vue/,
        ],
        imports: ['vue', 'pinia', 'vue-router'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/views', 'src/store/modules'],
        vueTemplate: true,
      }),
      compression(),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ]
  });
}