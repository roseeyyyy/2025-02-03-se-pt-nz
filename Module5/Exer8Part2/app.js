const express = require('express')
const cors = require('cors')
const storeRoutes = require('./routes/storeRoutes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger/swagger.json')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.static('public'))
app.use('/api/products', storeRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
