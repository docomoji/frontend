declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.svg' {
  const src: string
  export default src
}

// Dummy module for lint purpose when using wildcard imports
declare module '*/originals/' {}