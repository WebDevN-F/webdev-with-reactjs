const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Order = require('../models/order');

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT
 * paths:
 *  /api/order:
 *    post:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "order"
 *         summary: // Create new order
 *         description: // Create new order
 *         requestBody:
 *          required: true
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:              
 *              userId:
 *                  type: string
 *              products:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                        productId:
 *                           type: string
 *                        quantity:
 *                          type: number
 *              amount:
 *                 type: number
 *              address:
 *                 type: string
 *              status:
 *                 type: string
 *         responses:
 *          200:
 *           description: create new order successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    userId:
 *                      type: string
 *                    products:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                           productId:
 *                            type: string
 *                           quantity:
 *                            type: number
 *                    amount:
 *                       type: number
 *                    status:
 *                       type: string
 *                    address:
 *                       type: string
 *                    _id:
 *                       type: string
 *                    createdAt:
 *                       type: string
 *                       format: date-time
 *                    updatedAt:
 *                       type: string
 *                       format: date-time
 *          403:
 *           description: Forbidden
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *          500:
 *           description: exception
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: object
 */
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/order/{id}:
 *    put:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "order"
 *         summary: // update new order
 *         description: // update new order
 *         parameters:
 *         - in: path
 *           name: id
 *           schema:
 *           type: string
 *           required: true
 *         requestBody:
 *          required: true
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:              
 *              userId:
 *                  type: string
 *              products:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                        productId:
 *                           type: string
 *                        quantity:
 *                          type: number
 *              amount:
 *                  type: number
 *              address:
 *                 type: string
 *              status:
 *                type: string
 *         responses:
 *          200:
 *           description: update new order successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    userId:
 *                      type: string
 *                    products:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                           productId:
 *                            type: string
 *                           quantity:
 *                            type: number
 *                    amount:
 *                       type: number
 *                    status:
 *                       type: string
 *                    address:
 *                       type: string
 *                    _id:
 *                       type: string
 *                    createdAt:
 *                       type: string
 *                       format: date-time
 *                    updatedAt:
 *                       type: string
 *                       format: date-time
 *          403:
 *           description: Forbidden
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *          500:
 *           description: exception
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: object
 */
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/order/{id}:
 *    delete:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "order"
 *         summary: // delete new order
 *         description: // delete new order
 *         parameters:
 *         - in: path
 *           name: id
 *           schema:
 *           type: string
 *           required: true
 *         responses:
 *          200:
 *           description: delete a order successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    userId:
 *                      type: string
 *                    products:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                           productId:
 *                            type: string
 *                           quantity:
 *                            type: number
 *                    amount:
 *                       type: number
 *                    status:
 *                       type: string
 *                    address:
 *                       type: string
 *                    _id:
 *                       type: string
 *                    createdAt:
 *                       type: string
 *                       format: date-time
 *                    updatedAt:
 *                       type: string
 *                       format: date-time
 *          403:
 *           description: Forbidden
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *          500:
 *           description: exception
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: object
 */
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/order/find/{userId}:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "order"
 *         summary: // get info order by userid
 *         description: // get info order by userid
 *         parameters:
 *         - in: path
 *           name: userId
 *           schema:
 *           type: string
 *           required: true
 *         responses:
 *          200:
 *           description: get order successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    userId:
 *                      type: string
 *                    products:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                           productId:
 *                            type: string
 *                           quantity:
 *                            type: number
 *                    amount:
 *                       type: number
 *                    status:
 *                       type: string
 *                    address:
 *                       type: string
 *                    _id:
 *                       type: string
 *                    createdAt:
 *                       type: string
 *                       format: date-time
 *                    updatedAt:
 *                       type: string
 *                       format: date-time
 *          403:
 *           description: Forbidden
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *          500:
 *           description: exception
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: object
 */
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/order/find/{userId}/{status}:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "order"
 *         summary: // get info order by userid, status
 *         description: // get info order by userid, status
 *         parameters:
 *         - in: path
 *           name: userId
 *           schema:
 *           type: string
 *           required: true
 *         - in: path
 *           name: status
 *           schema:
 *           type: string
 *           required: true
 *         responses:
 *          200:
 *           description: get order by status successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    userId:
 *                      type: string
 *                    products:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                           productId:
 *                            type: string
 *                           quantity:
 *                            type: number
 *                    amount:
 *                       type: number
 *                    status:
 *                       type: string
 *                    address:
 *                       type: string
 *                    _id:
 *                       type: string
 *                    createdAt:
 *                       type: string
 *                       format: date-time
 *                    updatedAt:
 *                       type: string
 *                       format: date-time
 *          403:
 *           description: Forbidden
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *          500:
 *           description: exception
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: object
 */
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/order:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "order"
 *         summary: // get info order by userid, status
 *         description: // get info order by userid, status
 *         responses:
 *          200:
 *           description: get all orders successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    userId:
 *                      type: string
 *                    products:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                           productId:
 *                            type: string
 *                           quantity:
 *                            type: number
 *                    amount:
 *                       type: number
 *                    status:
 *                       type: string
 *                    address:
 *                       type: string
 *                    _id:
 *                       type: string
 *                    createdAt:
 *                       type: string
 *                       format: date-time
 *                    updatedAt:
 *                       type: string
 *                       format: date-time
 *          403:
 *           description: Forbidden
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *          500:
 *           description: exception
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: object
 */
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/order/income:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "order"
 *         summary: // get order income
 *         description: // get order income
 *         responses:
 *          200:
 *           description: get order income successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    _id:
 *                       type: number
 *                    total:
 *                       type: number
 *          403:
 *           description: Forbidden
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *          500:
 *           description: exception
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: object
 */
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
            message: "Orders income successfully",
            data: orders
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

module.exports = router;