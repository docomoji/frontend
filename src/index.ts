// Global style import
import '/styles/fonts/font.css'
import '/styles/global.css'
// Logic related imports
import { app } from 'hyperapp'
import { updateQuestion } from './routing/pages/game/effects'
import { generateSoloGameSub } from './routing/pages/game/subs'
import { GlobalState } from './routing/states'
import { request } from './routing/utils'
import { Router, parseUrl, createRoutingSubs } from '/routing/router'

app({
  init: [{
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
      current: 30,
      base: 30
    },
    fetching: true, // We are fetching the first solo game question
    // RouterState values
    location: parseUrl(window.location.pathname + window.location.search),
    status: 200,
  },
  request({
    url: 'https://docomoji-backend.herokuapp.com/random',
    action: updateQuestion
  })
  ],
  view: Router,
  subscriptions: (state: GlobalState) => [
    ...createRoutingSubs(),
    // This solution was given to me by Zacharias Enochsson: https://github.com/zaceno
    // state.location.path === 'Game' && call_websocket_subs_here
    // Timer setInterval routine
    generateSoloGameSub(state)
  ],
  node: document.getElementById('app')
})
