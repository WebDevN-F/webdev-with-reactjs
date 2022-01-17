const router = require('express').Router();
const Product = require('../models/product');
const { verifyTokenAndAuthorization } = require('./verifyToken');

// Create new product
router.post('/', verifyTokenAndAuthorization, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        return res.status(200).json({
            message: 'Product created successfully',
            data: savedProduct
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

// Update product
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    const { id } = req.params;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        return res.status(200).json({
            message: 'Product updated successfully',
            data: updatedProduct
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

// DELETE Product (only user admin can delete)
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        return res.status(200).json({
            message: 'Product deleted successfully',
            data: deletedProduct
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

// GET product by id
router.get('/find/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        return res.status(200).json({
            message: 'get product info successfully',
            data: product
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

// Get all products with pagination, sort and filter
router.get('/', async (req, res) => {
    if (!req.query.page) {
        req.query.page = 1;
    }
    if (!req.query.pagesize) { 
        req.query.pagesize = 100;
    }
    if (!req.query.q) { 
        req.query.q = '';
    }

    const { page, pagesize, q, category } = req.query;
    console.log(category);
    try {
        let products;
        if (!category) {
            products = await Product.find(
                {
                    $or: [
                        { title: { $regex: q || '', $options: 'i' } },
                    ],
                }
            )
                .sort({ createdAt: -1 })
                .skip((page - 1) * pagesize).limit(pagesize)
                .exec();
        } else { 
            products = await Product.find(
                {
                    $and: [
                        {
                            categories: {
                                $in: [category]
                            }
                        },
                        {
                            $or: [
                                { title: { $regex: q || '', $options: 'i' } },
                            ],
                        },
                    ],
                }
            )
                .sort({ createdAt: -1 })
                .skip((page - 1) * pagesize).limit(pagesize)
                .exec();
        }

        return res.status(200).json({
            message: 'Products fetched successfully',
            data: products
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

// get product stats
router.get('/stats', async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {

        const data = await Product.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } } },
            { $group: { _id: { year: "$year", month: "$month" }, count: { $sum: 1 } } },
        ]);

        return res.status(200).json({
            message: 'get products stats successfully',
            data: data
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

module.exports = router;