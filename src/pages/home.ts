import { h, text } from 'hyperapp'
//import html from 'hyperlit'
import 'milligram' 
import { State } from '../router'

const actions = {
    prevent: (state, event) => {
        event.preventDefault() 
        return state
    },
    prive: (state) => state,
    tuto: (state) => state,
}

export const Home = (state: State) => {
    return h('div', {}, [
        h('header', {}, text(JSON.stringify(state))),
        h('main', {},
            h('form', { id: 'form', onsubmit: actions.prevent }, [
                // TODO: Ajouter "l'image de profil" dans le formulaire
                h('input', { placeholder: 'your in-game name' }, ''),
                h('button', { onclick: actions.prive }, text('Partie Prive')),
                h('button', { onclick: actions.tuto }, text('Tutoriel')),
            ])
        ),
        h('footer', {}, []),
    ])
}