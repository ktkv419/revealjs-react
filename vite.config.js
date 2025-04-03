import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath } from "url"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: `/${fileURLToPath(import.meta.url)
        .split("/")
        .at(-2)}/`,
})
