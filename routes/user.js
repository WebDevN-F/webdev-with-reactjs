const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const User = require('../models/user');
const CryptoJS = require('crypto-js');

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/users/{id}:
 *    put:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "users"
 *         summary: update user
 *         description: update user
 *         parameters:
 *         - name: id
 *           in: path
 *           description: id of user
 *           required: true
 *           schema:
 *            type: string
 *         requestBody:
 *          required: true
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *              email:
 *                  type: string
 *              isAdmin:
 *                  type: boolean
 *         responses:
 *          200:
 *           description: update user successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                     username:
 *                      type: string
 *                     password:
 *                      type: string
 *                      required: false
 *                     email:
 *                      type: string
 *                     isAdmin:
 *                      type: boolean
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

    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SECRET
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        return res.status(200).json({
            message: 'User updated successfully',
            data: updatedUser
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
 *  /api/users/{id}:
 *    delete:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "users"
 *         summary: DELETE user (only user admin can delete)
 *         description: DELETE user (only user admin can delete)
 *         parameters:
 *         - name: id
 *           in: path
 *           description: id of user
 *           required: true
 *           schema:
 *            type: string
 *         responses:
 *          200:
 *           description: delete user successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                     username:
 *                      type: string
 *                     password:
 *                      type: string
 *                      required: false
 *                     email:
 *                      type: string
 *                     isAdmin:
 *                      type: boolean
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
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        return res.status(200).json({
            message: 'User deleted successfully',
            data: deletedUser
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
 *  /api/users/find/{id}:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "users"
 *         summary: GET user by id
 *         description: GET user by id
 *         parameters:
 *         - name: id
 *           in: path
 *           description: id of user
 *           required: true
 *           schema:
 *            type: string
 *         responses:
 *          200:
 *           description: get info user successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                     username:
 *                      type: string
 *                     password:
 *                      type: string
 *                      required: false
 *                     email:
 *                      type: string
 *                     isAdmin:
 *                      type: boolean
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
router.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        const { password, ...others } = user._doc;

        return res.status(200).json({
            message: 'get user info successfully',
            data: others
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
 *  /api/users:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "users"
 *         summary: GET ALL users with paging, sorting and filtering username or email (only user admin can get all users)
 *         description: GET ALL users with paging, sorting and filtering username or email (only user admin can get all users)
 *         parameters:
 *         - name: page
 *           in: path
 *           description: page index
 *           required: true
 *           schema:
 *            type: string
 *            example: 1
 *         - name: pagesize
 *           in: path
 *           description: page size
 *           required: true
 *           schema:
 *            type: string
 *            example: 100
*         - name: q
 *           in: path
 *           description: keyword search
 *           required: true
 *           schema:
 *            type: string
 *         responses:
 *          200:
 *           description: get list user successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                  type: string
 *               data:
 *                  properties:
 *                     username:
 *                      type: string
 *                     password:
 *                      type: string
 *                      required: false
 *                     email:
 *                      type: string
 *                     isAdmin:
 *                      type: boolean
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
    if (!req.query.q) { 
        req.query.q = '';
    }
    
    const { page, pagesize, q } = req.query;

    try {
        const users = await User.find(
            {
                $or: [
                    { username: { $regex: q, $options: 'i' } },
                    { email: { $regex: q, $options: 'i' } }
                ],
            }
        )
        .sort({ createdAt: -1 })
        .skip((page - 1) * pagesize).limit(pagesize)
        .select('-password')
        .exec();

        return res.status(200).json({
            message: 'get user info successfully',
            data: users
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
 *  /api/users/stats:
 *    get:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "users"
 *         summary: get user stats
 *         description: get user stats
 *         responses:
 *          200:
 *           description: get info user stats successfully
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
 *                      type: object
 *                     count:
 *                      type: number
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
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } } },
            { $group: { _id: { year: "$year", month: "$month" }, count: { $sum: 1 } } },
        ]);

        return res.status(200).json({
            message: 'get user stats successfully',
            data: data
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})


module.exports = router;