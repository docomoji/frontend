import { every } from '@hyperapp/time'
import { request } from '/routing/utils'
import { RouterState, SoloState } from "/routing/states";
import { nextTurn } from './effects'

// fetchOnCountdown takes the just updated state and check if timer.current
// is equal to 0. If so it changes the value of state.turn.complete to true.
// Changing this value means that the effect will be run and add to the returned array
// to be executed as an effect by hyperapp.
const fetchOnCountdown = (state: SoloState) => {
    const times_up = state.timer.current === 0
    return [
        {
            ...state,
            turn: {
                ...state.turn,
                complete: times_up
            },
            fetching: times_up
        },
        times_up
            ? request({
                url: 'https://docomoji-backend.herokuapp.com/random',
                action: nextTurn
            })
            : false // false is to diffuse the effect into the dispatch func
    ]
}
// Because we use every to create our subscription we get 
// the current date passing to the function. It is no need here so just ignoring it 
const gameTimerSub = (state: SoloState, _) => {
    return fetchOnCountdown({ 
        ...state,
        timer: {
            ...state.timer,
            current: state.timer.current - 1,
        }
    })
}

// return the solo game sub if every condition is check
export const generateSoloGameSub = (state: SoloState & RouterState) => {
    return state.location.path === '/solo'
        && ! state.fetching 
        && state.turn.current !== state.turn.max + 1 
        && !state.turn.complete
        && every(1000, gameTimerSub)
}