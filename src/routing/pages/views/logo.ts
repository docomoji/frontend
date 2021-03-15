import styles from '/styles/modules/views/logo.module.css'
import { h, text } from 'hyperapp'
import { Image } from '/routing/pages/views/docomo'

export const logo = () => {
    return h('a', {
        class: styles['header'],
        href: '/'
    },[
        Image({
            avatar: 'moon',
            size: 75,
            alt: 'Docomoji logo which represents a pale dark-blue moon with a star.'
        }),
        h('h1', { class: styles['header-title'] }, text('docomoji'))
    ])
}