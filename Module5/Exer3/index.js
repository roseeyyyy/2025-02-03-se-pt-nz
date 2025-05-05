const express = require("express")
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express()
app.use(express.static("public"))
app.use('/calculator', calculatorRoutes);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})
