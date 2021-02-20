import { h, text } from 'hyperapp'
import { State } from '../router'

export const Home = (state: State) => {
    return h('div', {}, [
        h('header', {}, text(JSON.stringify(state))),
        h('main', {},
            h('form', { id: 'form', onsubmit: state => state }, [
                // TODO: Ajouter "l'image de profil" dans le formulaire
                h('input', { placeholder: 'your in-game name' }, ''),
                h('button', { type: 'submit' }, text('Partie Prive')),
                h('a', {
                    class: ['button', 'button-outline'],
                    href: '/tutorial'
                }, text('Tutoriel')),
            ])
        ),
        h('footer', {}, []),
    ])
}