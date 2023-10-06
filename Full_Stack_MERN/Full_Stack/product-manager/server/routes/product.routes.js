const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/allProducts', ProductController.allProducts)
    app.post('/api/newProduct', ProductController.createProduct)
    app.get('/api/oneProduct/:id', ProductController.getOneProduct)
    app.delete('/api/deleteOneProduct/:id', ProductController.deleteOneProduct)
    app.patch('/api/updateProduct/:id', ProductController.updateOneProduct)
}