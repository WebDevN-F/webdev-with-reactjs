const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
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
            data: updatedUser
        })

    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
})

// DELETE user (only user admin can delete)
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

// GET user by id
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

// GET ALL users with paging, sorting and filtering username or email (only user admin can get all users)
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

module.exports = router;