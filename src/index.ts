import { app, h, text } from 'hyperapp'
import withLocation, { RouterState } from './hooks/withLocation'
import { Router } from './router'

export type State = RouterState

withLocation(app)({
  init: {},
  view: Router,
  node: document.getElementById('app')
})
