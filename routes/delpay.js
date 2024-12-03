const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('delpay', {
        title: 'BT - Доставка',
        isDelpay: true
    })
});

module.exports = router;