import { GlobalState } from '/routing/states'
import { Question } from './api_types'

export const nextTurn = (state: GlobalState, question: Question) => {
    // We need to update the question before updating the game state itself
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
        }
    }
}
