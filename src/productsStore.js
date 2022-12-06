// Coffee price_1MBnzeAVutFk9PIJAgbdhd0k
// Sunglasses price_1MBo2SAVutFk9PIJoDgSIUxo
// Camera price_1MBo3WAVutFk9PIJgcAddktp
const products = [
  {
    id: 'price_1MBnzeAVutFk9PIJAgbdhd0k',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: 'price_1MBo2SAVutFk9PIJoDgSIUxo',
    title: 'Sunglasses',
    price: 9.99,
  },
  {
    id: 'price_1MBo3WAVutFk9PIJgcAddktp',
    title: 'Camera',
    price: 39.99,
  },
]

function getProductData(id) {
  let productData = products.find((product) => product.id === id)

  if (productData === undefined) {
    console.log('Product data does not exist for ID: ' + id)
  }

  return productData
}

export { products, getProductData }
