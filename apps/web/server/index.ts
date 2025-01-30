import { createServer } from 'node:http'
import { parse } from 'node:url'
import next from 'next'
import * as jobs from './jobs'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

for (const job of Object.values(jobs)) {
  job.start()
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(String(req.url), true)
    handle(req, res, parsedUrl)
  })
    .listen(3000, () => {
      console.log('> Ready on http://localhost:3000')
    })
    .on('error', (err: Error) => {
      throw err
    })
})
