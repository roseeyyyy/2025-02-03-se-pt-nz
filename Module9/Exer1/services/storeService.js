const axios = require('axios')

exports.getProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products')
  return response.data
}
