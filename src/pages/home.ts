import html from 'hyperlit'
import 'milligram' 
import { State } from '../router'

const testAction = (state: State) => {
    return { ...state, TEST: 34 }
}

export const Home = (state: State) => {
    return html`
        <div>
            <header></header>
            <main>
                <p>${JSON.stringify(state)}</p>
                <button onclick=${testAction}>Change State</button>
                <a href="/test">Take me somewhere else to test</a>
            </main>
            <footer></footer>
        </div>
    `
}