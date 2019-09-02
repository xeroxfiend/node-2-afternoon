const messages = []

let id = 0

module.exports = {
    create: (res, req) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },

    read: (res, req) => {
        res.status(200).send(messsages)
    },

    update: (res, req) => {

    },

    delete: (res, req) => {

    }

}