import { createServer } from 'http'
import sirv from 'sirv'

const port = process.env.PORT || 3000

createServer(sirv('dist')).listen(port)