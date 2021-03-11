import styles from '/styles/milligram/custom.module.css'
import { h, text } from 'hyperapp'
import { GlobalState } from '../states'
import { locationChange } from '../utils'
import { Image } from './views/docomo'

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

export const Home = (state: GlobalState) => {
    return h('div', {}, [
        h('header', {}, [
            Image({
                avatar: 'moon',
                size: 100,
                alt: 'Docomoji logo which represents a pale dark-blue moon with a star.'
            }),
            h('h1', {}, text('DocomoJI'))
        ]),
        h('main', {},
            h('form', { id: 'form', action: '/solo', onsubmit: start_game }, [
                // TODO: Ajouter "l'image de profil" dans le formulaire
                h('input', { placeholder: 'votre pseudo pour le jeu', name: 'username' }, ''),
                h('button', {
                    type: 'submit',
                    disabled: true
                }, text('Partie Prive')),
                h('a', {
                    // Update the username based on the input field value
                    onmousedown: change_username,
                    class: [ styles['button'], styles['button-outline']],
                    href: '/solo'
                }, text('Solo')),
            ])
        ),
        h('footer', {}, []),
    ])
}