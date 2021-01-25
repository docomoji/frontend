const parseQueryString = (qs?: string) => (qs ? Object.fromEntries(new URLSearchParams(qs)) : {})

const parseUrl = (url: string) => {
  const [path, queryString] = url.split('?')
  return {
    path,
    query: parseQueryString(queryString)
  }
}

// Parse the pathname and spread the other state's prop into the returned object
const locationChange = (_, pathname) => {
    history.pushState({}, "", pathname)
    dispatchEvent(new CustomEvent("hyperapp-location"))
}

const toSub: (func: DispatchFunction, parsing: PropsParsingFunction) => SubscriptionFunction = (func, parsing) => (...args) => [func, parsing(args)]

export {
    parseUrl,
    locationChange,
    toSub
}