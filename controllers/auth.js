exports.googleCallback = (req, res) => {
    res.redirect('/dashboard')
}

exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}