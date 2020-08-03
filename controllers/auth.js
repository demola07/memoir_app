// @desc    Google auth Callback
// @route   GET /auth/google/callback
exports.googleCallback = (req, res) => {
    res.redirect('/dashboard')
}

// @desc    Logout
// @route   GET /auth/logout
exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}