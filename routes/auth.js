const router = require('express').Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });
    } catch (err) {
        console.warn(err);
        res.status(500).json({
            message: err
        });
    }
})

module.exports = router;