import { parseUrl, toSub } from './utils'

const urlChange = (dispatch, { action }) => {
  const handler = _ => {
    const path = window.location.pathname + window.location.search
    dispatch(action, parseUrl(path))
  }

  addEventListener("popstate", handler)
  addEventListener("hyperapp-location", handler)

  return () => ["popstate", "hyperapp-location"].map(
    (el) => removeEventListener(el, handler)
  )
}

const urlRequest = (dispatch, { action }) => {
  const clicks = event => {
    if (event.target.matches("a") && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
      event.preventDefault()
      const href = event.target.getAttribute("href")
      dispatch(action, href)
    }
  }

  addEventListener("click", clicks)

  return () => removeEventListener("click", clicks)
}



export const onUrlChange = toSub(
  urlChange,
  ([ action ]) => ({ action })
)

export const onUrlRequest = toSub(
  urlRequest,
  ([ action ]) => ({ action })
)