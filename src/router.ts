import 'milligram' 
import { h, text } from 'hyperapp'
//import html from 'hyperlit'
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
      return h('div', {}, Home(state))
    default:
      return h('div', {}, text(JSON.stringify(state)))
  }
}
