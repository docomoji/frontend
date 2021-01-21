const fx = (a) => (b) => [a, b]

const onRouteChanged = fx((dispatch, action) => {
  const handleLocationChange = () => {
    dispatch([action, window.location.pathname + window.location.search])
  }
  addEventListener('pushstate', handleLocationChange)
  addEventListener('popstate', handleLocationChange)
  return () => {
    removeEventListener('pushstate', handleLocationChange)
    removeEventListener('popstate', handleLocationChange)
  }
})

const parseQueryString = (qs?: string) => (qs ? Object.fromEntries(new URLSearchParams(qs)) : {})

const parseUrl = (url: string) => {
  const [path, queryString] = url.split('?')
  return {
    path,
    query: parseQueryString(queryString)
  }
}

const LocationChange = ({ location: _, ...state }, pathname: string) => ({
  location: parseUrl(pathname),
  ...state
})

const withLocation = (app) => ({ init, subscriptions = (_s) => [], ...rest }) => {
  return app({
    ...rest,
    init: LocationChange(init, window.location.pathname + window.location.search),
    subscriptions: (state) => [...subscriptions(state), onRouteChanged(LocationChange)]
  })
}

export default withLocation
