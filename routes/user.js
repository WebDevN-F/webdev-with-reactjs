const router = require('express').Router();

router.get('/usertest', (req, res) => { 
    res.json({
        message: 'Hello user'
    });
})

router.post('/userposttest', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email
    };

    res.json({
        message: 'User created successfully',
        user
    });
})

module.exports = router;