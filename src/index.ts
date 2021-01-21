import { app } from 'hyperapp'
import withLocation from './hooks/withLocation'
import { Router, RouterState } from './router'

export type State = RouterState

withLocation(app)({
  init: {
    TEST: 12
  },
  view: Router,
  node: document.getElementById('app')
})
