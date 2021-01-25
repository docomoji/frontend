import 'milligram' 
import html from 'hyperlit'
import { Home } from './pages/home'

// Types definition
export type PageState = {
  TEST?: number
}

export type LocationProps = {
  path: string,
  query: Record<string, any>
}

export type RouterState = {
  location: LocationProps
}

export type State = RouterState & PageState


// Router view
export const Router = (state: State) => {
  const { path } = state.location
  switch (path) {
    case '/':
      return html`<${Home} ${state}/>`
    default:
      return html`<h1>${JSON.stringify(state)}</h1>`
  }
}
