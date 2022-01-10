const express = require('express');
const cors = require('cors')

const contactRoute= require("./routes/contact.routes.js")

const app = express()

// parse requests of content-type  - application/json
app.use(express.json())
app.use(cors())

app.use(express.urlencoded())

app.use('/api',contactRoute)




const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
