import { defineConfig } from 'vite';
import path from 'node:path';
import less from 'less';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: false,
        rollupOptions: {
            input: path.resolve(__dirname, 'src/styles/index.less'),
            output: {
                assetFileNames: 'index.[ext]',
            },
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
});
