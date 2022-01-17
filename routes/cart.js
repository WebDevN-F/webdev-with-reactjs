const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Cart = require('../models/cart');

router.post('/', verifyTokenAndAuthorization, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        return res.status(200).json({
            message: 'Cart created successfully',
            data: savedCart
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    const { id } = req.params;

    try {
        const updatedCart = await Cart.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        return res.status(200).json({
            message: 'Cart updated successfully',
            data: updatedCart
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCart = await Cart.findByIdAndDelete(id);

        return res.status(200).json({
            message: 'Cart deleted successfully',
            data: deletedCart
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.find({
            userId: userId
        });

        return res.status(200).json({
            message: 'get cart info successfully',
            data: cart
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

// Get all products with pagination, sort and filter
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    if (!req.query.page) {
        req.query.page = 1;
    }
    if (!req.query.pagesize) { 
        req.query.pagesize = 100;
    }
    const { page, pagesize, q } = req.query;
    try {
        const carts = await Product.find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * pagesize).limit(pagesize)
            .exec();

        return res.status(200).json({
            message: 'Carts fetched successfully',
            data: carts
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

module.exports = router;