import { app } from 'hyperapp'
import { Router, State, LocationProps } from './router'
import { onUrlChange, onUrlRequest } from './subscriptions/navigation/subs'
import { locationChange, parseUrl } from './subscriptions/utils'

// Look at hyperapp dispatch function doc to understand those choices better
const urlChanged = (state: State, location: LocationProps) => ({ ...state, location })
const linkCliked = (state: State, pathname: string) => [state, [locationChange, pathname]]

app({
  init: {
    location: parseUrl(window.location.pathname + window.location.search)
  },
  view: Router,
  subscriptions: () => [
    onUrlChange(urlChanged),
    onUrlRequest(linkCliked)
  ],
  node: document.getElementById('app')
})
