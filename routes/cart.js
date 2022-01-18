const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Cart = require('./models/cart');

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/cart:
 *    post:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "cart"
 *         summary: create new cart
 *         description: create new cart
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
 *         responses:
 *          200:
 *           description: create cart successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                     _id:
 *                      type: string
 *                     userId:
 *                      type: string
 *                     products:
 *                      type: array
 *                      items:
 *                         type: object
 *                         properties:
 *                          productId:
 *                           type: string
 *                          quantity:
 *                           type: number
 *                          createdAt:
 *                           type: string     
 *                           format: date-time
 *                          updatedAt:
 *                           type: string
 *                           format: date-time
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/cart/{id}:
 *    put:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "cart"
 *         summary: update cart
 *         description: update cart
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
 *         responses:
 *          200:
 *           description: update cart successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                     _id:
 *                      type: string
 *                     userId:
 *                      type: string
 *                     products:
 *                      type: array
 *                      items:
 *                         type: object
 *                         properties:
 *                          productId:
 *                           type: string
 *                          quantity:
 *                           type: number
 *                          createdAt:
 *                           type: string     
 *                           format: date-time
 *                          updatedAt:
 *                           type: string
 *                           format: date-time
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/cart/{id}:
 *    delete:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "cart"
 *         summary: delete cart
 *         description: delete cart
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
 *         responses:
 *          200:
 *           description: delete cart successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                     _id:
 *                      type: string
 *                     userId:
 *                      type: string
 *                     products:
 *                      type: array
 *                      items:
 *                         type: object
 *                         properties:
 *                          productId:
 *                           type: string
 *                          quantity:
 *                           type: number
 *                          createdAt:
 *                           type: string     
 *                           format: date-time
 *                          updatedAt:
 *                           type: string
 *                           format: date-time
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/cart/find/{userId}:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "cart"
 *         summary: find cart by user
 *         description: find cart by user
 *         parameters:
 *         - in: path
 *           name: userId
 *           schema:
 *           type: string
 *           required: true
 *         responses:
 *          200:
 *           description: find info cart successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  type: array
 *                  items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                      type: string
 *                     userId:
 *                      type: string
 *                     products:
 *                      type: array
 *                      items:
 *                         type: object
 *                         properties:
 *                          productId:
 *                           type: string
 *                          quantity:
 *                           type: number
 *                          createdAt:
 *                           type: string     
 *                           format: date-time
 *                          updatedAt:
 *                           type: string
 *                           format: date-time
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/cart:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "cart"
 *         summary: // Get all products with pagination, sort and filter
 *         description: // Get all products with pagination, sort and filter
 *         parameters:
 *         - in: path
 *           name: page
 *           schema:
 *           type: string
 *           required: true
 *           example: 1
 *         - in: path
 *           name: pagesize
 *           schema:
 *           type: string
 *           required: true
 *           example: 100
 *         - in: path
 *           name: q
 *           schema:
 *           type: string
 *         responses:
 *          200:
 *           description: find info cart successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  type: array
 *                  items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                      type: string
 *                     userId:
 *                      type: string
 *                     products:
 *                      type: array
 *                      items:
 *                         type: object
 *                         properties:
 *                          productId:
 *                           type: string
 *                          quantity:
 *                           type: number
 *                          createdAt:
 *                           type: string     
 *                           format: date-time
 *                          updatedAt:
 *                           type: string
 *                           format: date-time
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