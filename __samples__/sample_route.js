const {Router} = require('express'); //*

const auth = require('../middleware/auth')
const User = require('../models/User')
const UserInfo = require('../models/UsersInfo')

const router = Router(); //*

router.get('/route', async (req, res) => {
    res.render('route/route', {
        title: 'Title',
        isLogin: true,
        logError: req.flash('logError')
    })
});

router.post('/route', async(req, res) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({ email })

        if (candidate) {
            const areSame = await bcrypt.compare(password, candidate.password)
            
            if (areSame) {
                req.session.user = candidate
                req.session.isAuthenticated = true
                req.session.save(err => {
                    if (err) {
                        throw err
                    }
                    res.redirect('/')
                })
            } else {
                req.flash('logError', 'Неверный логин или пароль')
                res.redirect('/auth/login')
            }
        } else {
            req.flash('logError', 'Неверный логин или пароль')
            res.redirect('/auth/login')
        }
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;