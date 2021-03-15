import milligram from '/styles/milligram/custom.module.css'
import styles from '/styles/modules/solo.module.css'
import { h, text } from 'hyperapp'
import { PlayerState, SoloState } from '/routing/states'
import { onInputEnter } from './actions'
import { multiple } from '/routing/utils'

export const gameView = (state: SoloState & PlayerState) => {
    // We only want to show the clue if the half the timer has passed
    const show_clue = state.timer.current <= state.timer.base * .5 

    return h('main', {
        class: [
            milligram['container'],
            styles['main']
        ]
    }, [
        h('div', {
            class: [
                styles['row']
            ]
        }, show_clue && text(state.turn.content.clue)),
        h('div', {
            class: [
                styles['emojis'],
                styles['row'],
            ]
        }, text(state.turn.content.emojis)),
        h('div', {
            class: [
                styles['row'],
                styles['input-time']
            ]
        }, [
            h('input', {
                class: styles['input'],
                onkeypress: onInputEnter,
                // If the answer contains spaces we want to specify the number of words instead
                // of the number of letters.
                placeholder: state.turn.content.answer.indexOf(' ') === -1
                    ? `en ${state.turn.content.answer.length} lettres`
                    : `en ${state.turn.content.answer.match(/ /g).length + 1} mots`
            }),
            h('span', {
                class: [
                    styles['timer'],
                    show_clue && styles['timer-half']
                ]
            }, text(state.timer.current)),
        ]),
        h('div', {
            class: [
                styles['rounds'],
                styles['row']
            ]
        }, multiple(5, (index: number) => {
            return h('div', {
                class: styles['pallet']
            },
                h('span', {
                    class: [
                        styles['sphere'],
                        (index + 1) < state.turn.current && styles['full']
                    ]
                })
            )
        }))
    ])
}

export const resultView = (state: SoloState & PlayerState) => {
    return h('main', {}, [
        text(`Results Page: ${state.score}/${state.turn.max}`)
    ])
}