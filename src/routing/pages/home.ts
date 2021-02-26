import { h, text } from 'hyperapp'
import { GlobalState, RouterState } from '../states'
import { locationChange } from '../utils'

const start_game = (state, event) => {
    event.preventDefault()
    console.log(new FormData(event.target))

    return [state, [locationChange, '/solo']]
}

export const Home = (state: GlobalState) => {
    return h('div', {}, [
        h('header', {}, text(JSON.stringify(state))),
        h('main', {},
            h('form', { id: 'form', action: '/solo', onsubmit: start_game }, [
                // TODO: Ajouter "l'image de profil" dans le formulaire
                h('input', { placeholder: 'votre pseudo pour le jeu', name: 'username' }, ''),
                h('button', { type: 'submit' }, text('Partie Prive')),
                h('a', {
                    class: [ 'button', 'button-outline'],
                    href: '/solo'
                }, text('Solo')),
            ])
        ),
        h('footer', {}, []),
    ])
}