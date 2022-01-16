const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const User = require('../models/user');
const CryptoJS = require('crypto-js');

// Update user profile
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
            user: updatedUser
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

module.exports = router;