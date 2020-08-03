const express = require('express')
const passport = require('passport')

const { googleCallback, logout } = require('../controllers/auth')

const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.route('/google').get(passport.authenticate('google', { scope: ['profile'] }))

router.route('/google/callback').get(passport.authenticate('google', { failureRedirect: '/', }), googleCallback)

router.route('/logout').get(logout)


module.exports = router