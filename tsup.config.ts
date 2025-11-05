import { defineConfig } from 'tsup';

const bannerText = `
/**
 * @license MIT
 * react-tiptap-editor v${require('./package.json').version}
 * Build time: ${new Date().toLocaleString('zh-CN', { hour12: false })}
 */
`;

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    outDir: 'dist',
    splitting: false,
    external: ['react', 'react-dom'],
    banner: {
        js: bannerText,
    },
});