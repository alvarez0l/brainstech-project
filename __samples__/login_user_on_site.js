router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body  //Take user_info from html.Body
        const candidate = await User.findOne({ email })  //Find user with this email

        if (candidate) {
            const areSame = await bcrypt.compare(password, candidate.password)  //Comparison with DB
            
            if (areSame) {
                req.session.user = candidate
                req.session.isAuthenticated = true  //Add session token
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