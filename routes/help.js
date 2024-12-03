const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('help', {
        title: 'BT - Помощь',
        isHelp: true
    })
});

module.exports = router;