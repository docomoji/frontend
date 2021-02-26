import { app } from 'hyperapp'
import { every } from '@hyperapp/time'
import { gameTimerSub } from './routing/pages/game/subs'
import { GlobalState } from './routing/states'
import { Router, parseUrl, createRoutingSubs } from '/routing/router'

app({
  init: {
    // Default PlayerState values
    username: 'moi',
    avatar: 'doggo',
    score: 0,
    turn: {
      complete: false,
      current: 1,
      max: 5,
    },
    timer: {
      current: 5,
      base: 5
    },
    // RouterState values
    location: parseUrl(window.location.pathname + window.location.search)
  },
  view: Router,
  subscriptions: (state: GlobalState) => [
    ...createRoutingSubs(),
    // This solution was given to me by Zacharias Enochsson: https://github.com/zaceno
    // state.location.path === 'Game' && call_websocket_subs_here
    // Timer setInterval routine
    state.location.path === '/solo' && ! state.turn.complete && every(1000, gameTimerSub)
  ],
  node: document.getElementById('app')
})
