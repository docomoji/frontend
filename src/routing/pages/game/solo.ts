import { h, text } from 'hyperapp'
import { SoloState, PlayerState, RouterState } from '/routing/states'

const gameView = (state: SoloState) => {
    return [
        h('span', {}, text(`${ state.turn.current }/${ state.turn.max }`)),
        h('span', {}, text('indice')),
        h('span', {}, text('guess')),
        h('input', { placeholder: 'ta tentative ici' }),
        h('span', {}, text(state.timer.current))
    ]
}

export const Solo = (state: SoloState & PlayerState & RouterState) => {
    return h('div', {}, [
        h('header', {}, []),
        h('main', {},
            ! state.turn.complete
                ? gameView(state)
                : false
        )
    ])
}