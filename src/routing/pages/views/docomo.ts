import { h } from 'hyperapp'

type ImageOptions = {
    size: number
    // This must be an absolute url
    url: string
    alt: string
}

// A view to display docomo original's emojis
export const Image = (options: ImageOptions) => 
    h('img', {
        src: options.url,
        width: options.size, 
        height: options.size, 
        alt: options.alt
    })