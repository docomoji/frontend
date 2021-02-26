import { request } from '/routing/utils'
import { SoloState } from "/routing/states";

// fetchOnCountdown takes the jsut updated state and check if timer.current
// is equal to 0. If so it changes the value of state.turn.complete to true.
// Changing this value means that the effect will be run and add to the returned array
// to be executed as an effect by hyperapp.
const fetchOnCountdown = (state: SoloState) => [
    {
        ...state,
        turn: {
            ...state.turn,
            complete: state.timer.current === 0
        }
    },
    state.timer.current === 0 
        ? request({
            url: 'http://dummy.restapiexample.com/api/v1/employee/1',
            action: (state, props) => {console.log(props); return state}
        })
        : false // This false is to diffuse the effect into the dispatch func
]

// Because we use every to create our subscription we get 
// the current date passing to the function. It is no need here so just ignoring it 
export const gameTimerSub = (state: SoloState, _) => {
    return fetchOnCountdown({ 
        ...state,
        timer: {
            ...state.timer,
            current: state.timer.current - 1,
        }
    })
}