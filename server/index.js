const server = require('express')
const app = express()
const SERVER_PORT = 5000

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))