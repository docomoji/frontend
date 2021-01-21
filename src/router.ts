import 'milligram' 

import html from 'hyperlit'
import { Home } from './pages/home'

export type RouterState = {
  location: {
    path: string
    query: Record<string, any>
  },
  TEST?: number
}

export const Router = (state: RouterState) => {
  const { path } = state.location

  switch (path) {
    case '/':
      return html`<${Home} ${state}/>`
    default:
      return html`<h1>${JSON.stringify(state)}</h1>`
  }
}
