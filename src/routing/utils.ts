import { LocationProps } from "./states"

const parseQueryString = (qs?: string) => (qs ? Object.fromEntries(new URLSearchParams(qs)) : {})

export const parseUrl: (url: string) => LocationProps = (url: string) => {
  const [path, queryString] = url.split('?')
  return {
    path,
    query: parseQueryString(queryString)
  }
}

// Parse the pathname and spread the other state's prop into the returned object
export const locationChange = (_, pathname: string) => {
    history.pushState({}, "", pathname)
    dispatchEvent(new CustomEvent("hyperapp-location"))
}

// ...args means that the function created by toSub can take multiple
// arguments which will all be merged into an array
// That's why the parsing function must take an argument and convert it
// into an object.
export const toSub = (func, parsing) => (...args) => [func, parsing(args)]

// Returns an effect fetching the data at url. It will then dispatch 
// action passing through the response's data. In case an error occur,
// it (for now) console.log the error
export const request = (props) => {
  return [
    (dispatch, { url, method = 'GET', action }) => {
      fetch(url, {
        method: method
      })
      .then((response) => {
        if (! response.ok) throw response

        return response.json()
      })
      .then((data) => dispatch(action, data))
      .catch((error) => console.log(error))
    },
    props
  ]
}