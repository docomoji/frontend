export type LocationProps = {
  path: string,
  query: Record<string, any>
}

export type RouterState = {
  location: LocationProps
  // TODO: Check requests status code and show error pages based on it
  status: Number
}

export type PlayerState = {
  username: string,
  avatar: string,
  score: number
}

export type MultiplayerState = {
  room: string
}

export type SoloState = {
    turn: {
      complete: boolean
      current: number
      max: number
      content: {
        emojis: string
        clue: string
        answer: string
      }
    },
    timer: {
      current: number,
      base: number
    }
    fetching: boolean
}

export type GlobalState = RouterState & MultiplayerState & SoloState & PlayerState