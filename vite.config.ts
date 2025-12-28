import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    // For subdomain deployment, no base path needed (default is '/')
    base: '/',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'resources/js')
        }
    },
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        // Skip wayfinder generation in Docker builds (use pre-generated types)
        ...(process.env.DISABLE_WAYFINDER !== 'true' ? [wayfinder({
            formVariants: true,
        })] : []),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
