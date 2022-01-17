const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Order = require('../models/order');

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        return res.status(200).json({
            message: "Order created successfully",
            data: savedOrder
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    const { id } = req.params;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        return res.status(200).json({
            message: "Order updated successfully",
            data: updatedOrder
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedOrder = await Order.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Order deleted successfully",
            data: deletedOrder
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await Order.find({ userId });

        return res.status(200).json({
            message: "Orders found successfully",
            data: orders
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

router.get("/find/:userId/:status", verifyTokenAndAuthorization, async (req, res) => {
    const { userId, status } = req.params;

    try {
        const orders = await Order.find({ userId, status });

        return res.status(200).json({
            message: "Orders found successfully",
            data: orders
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();

        return res.status(200).json({
            message: "Orders found successfully",
            data: orders
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

router.get("income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));

    try {
        const orders = await Order.aggregate([
            { $match: { createdAt: { $gte: lastMonth } } },
            {
                $project: {
                    month: { $month: "$createAt" },
                    sales: { $sum: "$amount" }
                }
            },
            {
                $group: {_id: "$month", total: { $sum: "$sales" }}
            }
        ])

        return res.status(200).json({
            message: "Orders found successfully",
            data: orders
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

module.exports = router;