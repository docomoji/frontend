import html from 'hyperlit'
import { RouterState } from './hooks/withLocation'
import { Index } from './pages/Page'
import { About } from './pages/About'

export const Router = (state: RouterState) => {
  const { path } = state.location

  switch (path) {
    case '/':
      return html`<${Index} path=${state.location.path} />`
    case '/about':
      return html`<${About} />`

    default:
      return html`<h1>404</h1>`
  }
}
