// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://salimhussaini.dev",
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },

        imageService: "cloudflare",
    }),

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [icon(), sitemap()],
});