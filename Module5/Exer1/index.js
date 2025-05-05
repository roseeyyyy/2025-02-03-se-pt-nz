// const express = require("express")
// const app = express()
// const calculateRoutes = require("./calculatorRoutes")
// const port = 3000

// app.get("/", (request, response) =>{
//     response.send("Hello World")
// })

// app.listen(port, () => {
//     console.log("" )
// })

// // map the calculator routes to our app
// app.use('/calculator', calculatorRoutes);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`)
})
