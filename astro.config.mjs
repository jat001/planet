import cloudflare from '@astrojs/cloudflare'
import netlify from '@astrojs/netlify'
import node from '@astrojs/node'
import partytown from '@astrojs/partytown'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

let adapter
if (process.env.PLATFORM === 'cloudflare') {
  adapter = cloudflare()
} else if (process.env.PLATFORM === 'netlify') {
  adapter = netlify()
} else if (process.env.PLATFORM === 'vercel') {
  adapter = vercel()
} else {
  adapter = node({ mode: 'standalone' })
}

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  adapter,
  integrations: [partytown()],
})
