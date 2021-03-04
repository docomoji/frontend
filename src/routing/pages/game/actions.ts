import { nextTurn } from './effects'
import { PlayerState, SoloState } from '/routing/states'
import { request } from '/routing/utils'

export const onInputEnter = (state: SoloState & PlayerState, event: KeyboardEvent) => {
    if (event.key !== 'Enter') return state

    const input = event.target as HTMLInputElement
    return [
        {
            ...state,
            score: state.score + 1
        },
        // We spread the result of the following statement to because we need to execute
        // multiple effects.
        ...(input.value === state.turn.content.answer
            ? [
                // One time effect cleaning the input field
                [(state, input) => {
                    input.value = ''
                    return state
                }, input],
                // Retrieve a new question
                request({
                    url: 'http://localhost:8080/random',
                    action: nextTurn
                })
            ]
            : [false]
        )
    ]
}