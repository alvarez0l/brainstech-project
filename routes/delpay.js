const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('delpay', {
        title: 'Advanced Tech Systems',
        isDelpay: true
    })
});

module.exports = router;