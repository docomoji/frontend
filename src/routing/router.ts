import 'milligram' 
import { h } from 'hyperapp'
import { Home, Solo, Error, Game } from './pages/exports'
import { onUrlChange, onUrlRequest } from './subscriptions'
import { locationChange } from './utils'
import { GlobalState, LocationProps } from './states'

export { parseUrl } from './utils'

// Router view
export const Router = (state: GlobalState) => {
  const { path } = state.location
  switch (path) {
    case '/':
      return h('div', {}, Home(state))
    case '/solo':
      return h('div', {}, Solo(state))
    default:
      return h('div', {}, Error())
  }
}

const urlChanged = (state: GlobalState, location: LocationProps) => ({ ...state, location })
// This will call locationChange passing in pathname as an argument.
// locationChange will then call history.pushstate, modifying the url and 
// dispatch an hyperapp-location event. This call the onUrlChange sub's handler.
const linkCliked = (state: GlobalState, pathname: string) => [state, [locationChange, pathname]]

export const createRoutingSubs = () => [
  onUrlChange(urlChanged),
  onUrlRequest(linkCliked)
]