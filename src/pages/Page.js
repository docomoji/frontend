import html from 'hyperlit'

export const Index = (props, children) => html`<h1>${JSON.stringify(props)}</h1>`
