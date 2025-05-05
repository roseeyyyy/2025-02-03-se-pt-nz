const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const express = require('express');
const app = express();

const calculatorRoutes = require('../routes/calculatorRoutes');

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use('/', calculatorRoutes);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
});
