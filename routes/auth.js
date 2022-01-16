const router = require('express').Router();
const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    });

    try {
        const saveduser = await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            user: saveduser
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

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

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.header('auth-token', token).json({
            token: token,
            user: user.username
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

module.exports = router;