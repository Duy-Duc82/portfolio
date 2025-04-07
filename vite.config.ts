import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
    plugins: [react(), visualizer() as PluginOption],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            components: path.resolve(__dirname, './src/components'),
            screens: path.resolve(__dirname, './src/screens'),
            assets: path.resolve(__dirname, './src/assets'),
        },
    },
    css: {
        devSourcemap: true,
    },
    build: {
        sourcemap: true,
    },
});
