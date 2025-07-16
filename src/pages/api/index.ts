import type { APIRoute } from 'astro'

export const ALL: APIRoute = () => {
  return new Response('Hello, World!')
}

export const prerender = false
