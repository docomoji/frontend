import { h } from 'hyperapp'
import * as images from '../../../public/images/originals/'

type ImageOptions = {
    size: number
    // This must be an absolute url
    avatar: string
    alt: string
    class?: string | Array<String>
}

// A view to display docomo original's emojis
export const Image = (options: ImageOptions) => 
    h('img', {
        src: images[options.avatar],
        width: options.size, 
        height: options.size, 
        alt: options.alt,
        class: options.class !== undefined
            ? options.class
            : '',
    })