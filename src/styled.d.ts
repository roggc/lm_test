import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    dimensions: {
      radius: number
      padding: {
        simple: number
      }
      margin: {
        simple: number
      }
    }
    colors: {
      white: string
      black: string
    }
  }
}
