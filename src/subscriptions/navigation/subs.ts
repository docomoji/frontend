import { parseUrl, toSub } from '../utils'

const urlChange: DispatchFunction = (dispatch, { action }) => {
  const handler = _ => {
    const path = window.location.pathname + window.location.search
    dispatch(action, parseUrl(path))
  }

  addEventListener("hyperapp-location", handler)

  return () => removeEventListener("hyperapp-location", handler)
}

const urlRequest: DispatchFunction = (dispatch, { action }) => {
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

const parseAction: PropsParsingFunction = ([ action ]) => ({ action })


export const onUrlChange: SubscriptionFunction = toSub(
  urlChange,
  parseAction
)

export const onUrlRequest: SubscriptionFunction = toSub(
  urlRequest,
  parseAction
)