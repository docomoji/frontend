import { nextTurn } from './effects'
import { PlayerState, SoloState } from '/routing/states'
import { request } from '/routing/utils'

export const onInputEnter = (state: SoloState & PlayerState, event: KeyboardEvent) => {
    if (event.key !== 'Enter') return state

    const input = event.target as HTMLInputElement
    const correct_answer = input.value.toLowerCase() === state.turn.content.answer
    return [
        {
            ...state,
            score: state.score + 
            (
                correct_answer
                    ? 1
                    : 0
            )
        },
        // We spread the result of the following statement to because we need to execute
        // multiple effects and hyperapp will only accept 1-dimension array.
        ...(correct_answer
            ? [
                // One time effect cleaning the input field
                [(state, input) => {
                    input.value = ''
                    return state
                }, input],
                // Retrieve a new question
                request({
                    url: 'http://localhost:3030/random', // TODO: Change to generic link
                    action: nextTurn
                })
            ]
            : [false]
        )
    ]
}