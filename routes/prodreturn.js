const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('prodreturn', {
        title: 'BT - Возврат',
        isProdreturn: true
    })
});

module.exports = router;