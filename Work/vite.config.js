import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env': env
        },
        resolve: {
            alias: [
                { find: /^~/, replacement: '' },
                { find: '@src', replacement: path.resolve(__dirname, 'src') },
                { find: '@assets', replacement: path.resolve(__dirname, 'src/@core/assets') },
                { find: '@components', replacement: path.resolve(__dirname, 'src/@core/components') },
                { find: '@layouts', replacement: path.resolve(__dirname, 'src/@core/layouts') },
                { find: '@store', replacement: path.resolve(__dirname, 'src/redux') },
                { find: '@styles', replacement: path.resolve(__dirname, 'src/@core/scss') },
                { find: '@configs', replacement: path.resolve(__dirname, 'src/configs') },
                { find: '@utils', replacement: path.resolve(__dirname, 'src/utility/Utils') },
                { find: '@hooks', replacement: path.resolve(__dirname, 'src/utility/hooks') }
            ]
        },
        css: {
            preprocessorOptions: {
                scss: {
                    includePaths: ['node_modules', 'src/assets']
                }
            }
        },
        plugins: [react(), svgr()],
        esbuild: {
            loader: 'jsx',
            include: /src\/.*\.jsx?$/,
            exclude: [],
        },
        optimizeDeps: {
            esbuildOptions: {
                plugins: [
                    {
                        name: 'load-js-files-as-jsx',
                        setup(build) {
                            build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => {
                                const fs = await import('fs');
                                return {
                                    loader: 'jsx',
                                    contents: fs.readFileSync(args.path, 'utf8'),
                                };
                            });
                        },
                    },
                ],
            },
        },
    };
});
