import { fileURLToPath, URL } from 'node:url'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { createServer, defineConfig, type Plugin, type ViteDevServer } from 'vite'
import vue from '@vitejs/plugin-vue'

const AGENT_ENTRY = '/src/agent/render.ts'
const AGENT_FILE = 'agent.md'

async function renderAgentMarkdown(server: ViteDevServer): Promise<string> {
  const { renderAgentMarkdown } = await server.ssrLoadModule(AGENT_ENTRY)
  return renderAgentMarkdown()
}

// Serves all views combined as Markdown on /agent (dev) and emits
// dist/agent.md at build time (served on /agent by vercel.json).
function agentMarkdownPlugin(): Plugin {
  let command: 'build' | 'serve' = 'serve'
  let root = process.cwd()
  let outDir = 'dist'

  return {
    name: 'agent-markdown',
    configResolved(config) {
      command = config.command
      root = config.root
      outDir = resolve(config.root, config.build.outDir)
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = (req.url || '').split('?')[0]
        if (path !== '/agent' && path !== `/${AGENT_FILE}`) return next()
        try {
          const markdown = await renderAgentMarkdown(server)
          res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
          res.end(markdown)
        } catch (e) {
          server.ssrFixStacktrace(e as Error)
          next(e)
        }
      })
    },
    async closeBundle() {
      // Vite also calls this hook when a dev server closes
      if (command !== 'build') return

      const server = await createServer({
        root,
        logLevel: 'error',
        appType: 'custom',
        server: { middlewareMode: true, hmr: false },
      })
      try {
        await writeFile(resolve(outDir, AGENT_FILE), await renderAgentMarkdown(server))
      } finally {
        await server.close()
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    agentMarkdownPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
