export type LocationProps = {
  path: string,
  query: Record<string, any>
}

export type RouterState = {
  location: LocationProps
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
        guess: string
        clue: string
        answer: string
      }
    },
    timer: {
      current: number,
      base: number
    }
}

export type GlobalState = RouterState & MultiplayerState & SoloState & PlayerState