const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('contacts', {
        title: 'BT - Контакты',
        isContacts: true
    })
});

module.exports = router;