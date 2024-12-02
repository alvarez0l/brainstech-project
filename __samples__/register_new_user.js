router.post('/register', registerValidators, async(req, res) => {  //Function for register a new user
    try {
        
        const {name, l_name, s_name, phone, email, password, repeat} = req.body  //Take user_info from html.Body
        const pass = req.body.repeat  //Check a repeat pass
        const candidate = await User.findOne({ email })  //Find user with this email

        const errors = validationResult(req)  //Validation
        if (!errors.isEmpty()) {  //Error
            req.flash('regError', errors.array()[0].msg)
            return res.status(422).redirect('/auth/register')
        }

        if (pass != password) {  //If "repeat" not a pass
            req.flash('regError', 'Пароли не совпадают')
            res.redirect('/auth/register')
        } else {
            if (candidate) {
                req.flash('regError', 'Пользователь с такой почтой уже существует')
                res.redirect('/auth/register')
            } else {
                const passwordHash = await bcrypt.hash(password, 10)  //Hashing a user pass
                const user = new User({  //Add new user on DB
                    name, l_name: req.body.l_name, s_name: req.body.s_name, phone: req.body.phone, email, password: passwordHash, cart: {items: []}
                })
                await user.save()  //Save on DB
                res.redirect('/auth/login')
            }
        }
    } catch (e) {
        console.log(e)
    }
});