import html from 'hyperlit'
import 'milligram' 
import { RouterState } from '../router'

const testAction = (state: RouterState) => {
    state.TEST = 34
    return { ...state }
}

export const Home = (state: RouterState) => {
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