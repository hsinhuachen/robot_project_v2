import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    base: '/',
    //只要這行就可以把 root path 設定在
    outDir: '../public/',
    site: 'https://eray.4pt.tw/',
    build: {
        format: 'file'
    },
    integrations: [sitemap(), react()]
});
