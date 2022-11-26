const products = [
  {
    id: '1',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: '2',
    title: 'Sunglasses',
    price: 9.99,
  },
  {
    id: '3',
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
