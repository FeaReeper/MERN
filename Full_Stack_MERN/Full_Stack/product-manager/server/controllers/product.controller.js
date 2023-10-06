const Product = require('../models/product.model')

module.exports = {
    allProducts: (req, res) => {
        Product.find({})
            .then((products) => {
                res.status(200).json(products)
            })
            .catch((err) => res.status(500).json({message: 'Error in controllers for get all products', error: err}))
    },
    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => {
            res.status(200).json({ product: newProduct})
        })
        .catch((err) => res.status(500).json({message: 'Error in controllers for create a product', error: err}))
    },
    getOneProduct: (req, res) => {
        Product.findOne({_id:req.params.id})
            .then((product) => {
                res.status(200).json(product)
            })
            .catch((err) => res.status(500).json({message: 'Error in controllers for get one product', error: err}))
    },
    deleteOneProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((updatedProduct) => {
                res.status(200).json({product: updatedProduct})
            })
            .catch((err) => res.status(500).json({message: 'Error in controllers for delete a product', error: err}))
    },
    updateOneProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((product) => {
            res.status(200).json(product)
        })
        .catch((err) => res.status(500).json({message: 'Error in controllers for update a product', error: err}))
    }
}