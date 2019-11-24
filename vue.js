window.onload = function () {
  const app = new Vue ({
    el: '#app',
    data: {
      products: []
    },
    created () {
      fetch('https://api.myjson.com/bins/74l63')
        .then(response => response.json())
        .then(json => {
          this.products = json.products
        })
    }
  })
}
