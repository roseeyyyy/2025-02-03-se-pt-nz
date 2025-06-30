const productService = require('../services/productService')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getProducts()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
