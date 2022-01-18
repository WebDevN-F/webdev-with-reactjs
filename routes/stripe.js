const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

/**
 * @openapi: 3.0.0
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * paths:
 *  /api/checkout:
 *    post:
 *         security:
 *         - bearerAuth: []
 *         tags: 
 *          - "checkout"
 *         summary: // checkout
 *         description: // checkout product
 *         requestBody:
 *          required: true
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *              tokenId:
 *                type: string
 *              amount:
 *                type: number
 *         responses:
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
router.post('/', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    });
})

module.exports = router;