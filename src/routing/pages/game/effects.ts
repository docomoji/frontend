import { GlobalState } from '/routing/states'
import { Question } from './api_types'

export const nextTurn = (state: GlobalState, question: Question) => {
    // We need to update the question before updating the game state itself
    // All the state changes bellow will only be applied after the updateQuestion returns.
    // So the updateQuestion will add `question` values into the changed state and return
    // a new state which will consist in a merge of both states.
    return updateQuestion({
            ...state,
            timer: {
                ...state.timer,
                current: state.timer.base,
            },
            turn: {
                ...state.turn,
                complete: state.turn.current + 1 == state.turn.max + 1,
                current: state.turn.current + 1
            }
        }, question)
}

export const updateQuestion = (state: GlobalState, question: Question) => {
    return {
        ...state,
        turn: {
            ...state.turn,
            content: {
                ...question
            }
        },
        fetching: false
    }
}
