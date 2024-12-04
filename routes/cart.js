const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('cart', {
        title: 'BT - Корзина'
    })
});

module.exports = router;