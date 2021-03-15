import { App } from '@tinyhttp/app'
import sirv from 'sirv'

const port = process.env.PORT || 3000
const app = new App()

app.use(sirv('dist'))
// This is a junky way to make refreshing on /solo works
// Need to find a more generic way that could be apply to all
// comming endpoints
app.use('/solo', sirv('dist'))

app.listen(port, console.log('Server is running'))