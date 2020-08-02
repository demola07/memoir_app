exports.login = (req, res) => {
    res.render('login', {
        layout: 'login'
    })
}

exports.dashboard = (req, res) => {
    res.render('dashboard')
}

