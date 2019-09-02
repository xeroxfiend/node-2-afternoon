const express = require('express')
const app = express()
const messagesCtrl = require('./controllers/messages_controller')
const SERVER_PORT = 3001

app.use(express.static(__dirname + '/../public/build'))

app.use(express.json())

app.post('/api/messages', messagesCtrl.create)

app.get('/api/messages', messagesCtrl.read)

app.put('/api/messages/:id', messagesCtrl.update)

app.delete('/api/messages/:id', messagesCtrl.delete)



app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))