const router = require('express').Router();
const Product = require('./models/product');
const { verifyTokenAndAuthorization } = require('./verifyToken');

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/products:
 *    post:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "products"
 *         summary: // Create new product
 *         description: // Create new product
 *         requestBody:
 *          required: true
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *              title:
 *                type: string
 *              desc:
 *                type: string
 *              img:
 *               type: string
 *              categories:
 *               type: array
 *               items:
 *                type: string
 *              size:
 *               type: string
 *              color:
 *               type: string
 *              price:
 *               type: number
 *         responses:
 *          200:
 *           description: create product successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    title:
 *                      type: string
 *                    desc:
 *                      type: string
 *                    img:
 *                      type: string
 *                    categories:
 *                       type: array
 *                       items:
 *                          type: string
 *                    size:
 *                       type: string
 *                    color:
 *                       type: string
 *                    price:
 *                       type: number
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/products/{id}:
 *    put:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "products"
 *         summary: // Update product
 *         description: // Update product
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
 *              title:
 *                type: string
 *              desc:
 *                type: string
 *              img:
 *               type: string
 *              categories:
 *               type: array
 *               items:
 *                type: string
 *              size:
 *               type: string
 *              color:
 *               type: string
 *              price:
 *               type: number
 *         responses:
 *          200:
 *           description: update product successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    title:
 *                      type: string
 *                    desc:
 *                      type: string
 *                    img:
 *                      type: string
 *                    categories:
 *                       type: array
 *                       items:
 *                          type: string
 *                    size:
 *                       type: string
 *                    color:
 *                       type: string
 *                    price:
 *                       type: number
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/products/{id}:
 *    delete:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "products"
 *         summary: // DELETE Product (only user admin can delete)
 *         description: // DELETE Product (only user admin can delete)
 *         parameters:
 *         - in: path
 *           name: id
 *           schema:
 *           type: string
 *           required: true
 *         responses:
 *          200:
 *           description: delete product successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    title:
 *                      type: string
 *                    desc:
 *                      type: string
 *                    img:
 *                      type: string
 *                    categories:
 *                       type: array
 *                       items:
 *                          type: string
 *                    size:
 *                       type: string
 *                    color:
 *                       type: string
 *                    price:
 *                       type: number
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/products/find/{id}:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "products"
 *         summary: // GET product by id
 *         description: // GET product by id
 *         parameters:
 *         - in: path
 *           name: id
 *           schema:
 *           type: string
 *           required: true
 *         responses:
 *          200:
 *           description: get info product successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    title:
 *                      type: string
 *                    desc:
 *                      type: string
 *                    img:
 *                      type: string
 *                    categories:
 *                       type: array
 *                       items:
 *                          type: string
 *                    size:
 *                       type: string
 *                    color:
 *                       type: string
 *                    price:
 *                       type: number
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/products/find/{id}:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "products"
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
 *           example: 1
 *         - in: path
 *           name: q
 *           schema:
 *           type: string
 *           required: true
 *         - in: path
 *           name: category
 *           schema:
 *           type: string
 *         responses:
 *          200:
 *           description: get list products successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                    title:
 *                      type: string
 *                    desc:
 *                      type: string
 *                    img:
 *                      type: string
 *                    categories:
 *                       type: array
 *                       items:
 *                          type: string
 *                    size:
 *                       type: string
 *                    color:
 *                       type: string
 *                    price:
 *                       type: number
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

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/products/stats:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "products"
 *         summary: // get product stats
 *         description: // get product stats
 *         responses:
 *          200:
 *           description: get product stats successfully
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
 *                       type: object
 *                       properties:
 *                        year:
 *                          type: number
 *                        month:
 *                          type: number
 *                    count:
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