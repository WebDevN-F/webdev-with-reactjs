const router = require('express').Router();
const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/auth/register:
 *    post:
 *         tags: 
 *          - "auth"
 *         summary: register new user
 *         description: register a new user
 *         requestBody:
 *          required: true
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *              username:
 *                  type: string
 *                  example: ngnam
 *              email:
 *                  type: string
 *                  example: ngnam@gmail.com
 *              password:
 *                  type: string
 *                  example: qwe123
 *         responses:
 *          201:
 *           description: create user successfully
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
 *                     email:
 *                      type: string
 *                     isAdmin:
 *                      type: boolean
 *                     createdAt:
 *                      type: string
 *                      format: date-time
 *                     updatedAt: 
 *                      type: string     
 *                      format: date-time
 *          500:
 *           description: exceptions failed
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               message:
 *                type: object
 */
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    });

    try {
        const saveduser = await newUser.save();
        const { password, _id, __v, ...others } = saveduser._doc;

        res.status(201).json({
            message: 'User created successfully',
            data: others
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
 *  /api/auth/login:
 *    post:
 *         tags: 
 *          - "auth"
 *         summary: login user
 *         description: login user
 *         requestBody:
 *          required: true
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *              username:
 *                  type: string
 *                  example: ngnam
 *              password:
 *                  type: string
 *                  example: 12345
 *         responses:
 *          200:
 *           description: login user successfully
 *           content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *               access_token:
 *                  type: string
 *               data:
 *                  properties:
 *                     username:
 *                      type: string
 *                     email:
 *                      type: string
 *                     isAdmin:
 *                      type: boolean
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
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(401).json({
                message: 'User not found'
            });
        }

        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET).toString(CryptoJS.enc.Utf8);
        if (decrypted !== password) {
            return res.status(401).json({
                message: 'Password is incorrect'
            });
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.header('auth-token', token).json({
            access_token: token,
            data: {
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin
            }
        });

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

module.exports = router;