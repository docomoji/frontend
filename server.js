import { App } from '@tinyhttp/app'
import { readFileSync } from 'fs'
import { startServer, loadConfiguration } from 'snowpack'
import { renderToString } from 'hyperapp-render'
import { h } from 'hyperapp'

const app = new App()
const config = await loadConfiguration({}, './snowpack.config.cjs')

const server = await startServer({
  config
})
const runtime = server.getServerRuntime()

app.use(async (req, res, next) => {
  const importedComponent = await runtime.importModule('/dist/Page.js')
  const Page = importedComponent.exports.default
  
  const html = renderToString(h(Page, {}))
  
  const htmlFile = readFileSync('./public/index.html', 'utf8')
  
  const document = htmlFile.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`)
  
  res.send(document)
})

app.listen(3000, () => console.log('Up and running on :3000'))
