import styles from '/styles/modules/solo.module.css'
import { h, text } from 'hyperapp'
import { SoloState, PlayerState, RouterState } from '/routing/states'
import { gameView, resultView } from './views'

export const Solo = (state: SoloState & PlayerState & RouterState) => {
    return h('div', {}, [
        h('header', {}, []),
        h('main', {class: styles.test},
            !state.turn.complete && state.turn.content
                ? gameView(state)
                : state.turn.current === state.turn.max + 1
                    ? resultView(state)
                    // TODO: Create a view and remove the view after some delay
                    : text('Chargement d\'une nouvelle question')
        )
    ])
}