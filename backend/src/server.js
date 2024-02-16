const express = require('express')
const user_routes = require('./user_routes')

const app = express()
const port = 3000

app.use(express.json())
app.use('/api/users', user_routes)

app.listen(port, () => {
    console.log(`server listening on port ${port}...`)
})
