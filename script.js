function Products()=fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
.then((response) => {
  console.log(response);
  // use chaining by returning the promise
  return response.json(); // response.json() return a promise
})
.then((products) => {
    console.log(products)
})