const express = require("express")
const router = express.Router()

router.get("/calculator/add", (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)

    let result = num1 + num2

    res.status(200)
    res.json({result: result})
})

router.get("/calculator/subtract", (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)

    let result = num1 - num2

    res.status(200)
    res.json({result: result})
})

router.get("/calculator/multiply", (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)

    let result = num1 * num2

    res.status(200)
    res.json({result: result})
})

router.get("/calculator/divide", (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)

    let result = num1 / num2

    if (num2 == 0) {
        res.json({result: 'cannot divide by zero'})
    } else {
        res.status(200)
        res.json({result: result})
    }
})

module.exports = router
