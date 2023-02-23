export const getProducts = callback => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(json => callback(json.products))
  }
  
  export const addProduct = (body, callback) => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(json => callback(json))
  }