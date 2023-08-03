import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
    site: "https://anthonygcamacho.github.io",
    // base: "/astro-boilerplate",
    integrations: [tailwind({ applyBaseStyles: false })],
})
