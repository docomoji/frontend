import { h, text } from 'hyperapp'
import { PlayerState, SoloState } from '/routing/states'
import { onInputEnter } from './actions'

export const gameView = (state: SoloState & PlayerState) => {
    return [
        h('span', {}, text(`${ state.turn.current }/${ state.turn.max }`)),
        // We only want to show the clue if the half the timer has passed
        state.timer.current <= state.timer.base * .5 && h('span', {}, text(state.turn.content.clue)),
        h('span', {}, text(state.turn.content.emojis)),
        h('input', {
            onkeypress: onInputEnter,
            // If the answer contains spaces we want to specify the number of words instead
            // of the number of letters.
            placeholder: state.turn.content.answer.indexOf(' ') === -1
                ? `en ${state.turn.content.answer.length} lettres`
                : `en ${state.turn.content.answer.match(/ /g).length} mots`
        }),
        h('span', {}, text(state.timer.current))
    ]
}

export const resultView = (state: SoloState) => {
    return text('Hello')
}