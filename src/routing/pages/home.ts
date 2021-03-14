// Style related import
import milligram from '/styles/milligram/custom.module.css'
import utils from '/styles/modules/utils.module.css'
import styles from '/styles/modules/home.module.css'
// Logic related imports
import { h, text } from 'hyperapp'
import { logo } from '/routing/pages/views/logo'
import { GlobalState } from '../states'
import { locationChange } from '../utils'

const change_username = (state: GlobalState) => {
    const username = document.getElementsByTagName('input')[0].value
    return {
        ...state,
        username: username !== '' 
            ? username
            : 'moi'
    }
}

const start_game = (state: GlobalState, event: Event) => {
    event.preventDefault()
    return [state, [locationChange, '/solo']]
}

export const Home = () => {
    return h('div', {}, [
        h('header', {}, logo()),
        h('main', {
            class: styles['main']
        },
            h('form', { 
                id: 'form',
                action: '/solo',
                onsubmit: start_game,
                class: [
                    milligram['container'],
                    styles['max-width']
                ]
            }, [
                // TODO: Ajouter "l'image de profil" dans le formulaire
                h('div', {
                    class: milligram['row'],
                },
                    h('input', {
                        placeholder: 'pseudonyme',
                        name: 'username',
                        class: milligram['column']
                    })
                ),
                h('div', {
                    class: milligram['row']
                }, [
                    h('div', {
                        class: [
                            styles['custom-60'],
                            milligram['column'],
                        ]
                    }, 
                        h('button', {
                            type: 'submit',
                            disabled: true,
                            class: utils['column-full-element']
                        }, text('Partie Prive'))
                    ),
                    h('div', {
                        class: milligram['column']
                    },
                        h('a', {
                            // Update the username based on the input field value
                            onmousedown: change_username,
                            class: [ 
                                milligram['button'],
                                milligram['button-outline'],
                                utils['column-full-element']
                            ],
                            href: '/solo'
                        }, text('Solo'))
                    )
                ])
            ])
        ),
        h('footer', {
            class: styles['footer']
        }, [
            h('div', {
                class: styles['footer-container']
            }, [
                h('div', {
                    class: styles['footer-content']
                }, h('a', {
                    href: 'https://www.github.com/docomoji',
                    target: '_blank'
                }, text('Github'))),
                h('div', {
                    class: styles['footer-content']
                }, h('a', {
                    href: '/list'
                }, text('Emojis List'))),
                h('div', {
                    class: styles['footer-content']
                }, h('a', {
                    href: '/community'
                }, text('Communaute'))),
            ]),
            h('div', {
                class: styles['footer-container']
            }, text('All rights reserved. docomoji 2021.'))
        ]),
    ])
}