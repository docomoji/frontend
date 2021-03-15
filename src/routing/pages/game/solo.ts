import { h, text } from 'hyperapp'
import { SoloState, PlayerState, RouterState } from '/routing/states'
import { gameView, resultView } from './views'
import { logo } from '../views/logo'

export const Solo = (state: SoloState & PlayerState & RouterState) => {
    return h('div', {}, [
        h('header', {}, logo()),
        !(state.turn.complete || state.fetching)
            ? gameView(state)
            : state.turn.current === state.turn.max + 1
                ? resultView(state)
                : text('Chargement d\'une nouvelle question')
    ])
}