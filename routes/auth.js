const express = require('express')
const passport = require('passport')

const { googleCallback, logout } = require('../controllers/auth')

const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.route('/google').get(passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth Callback
// @route   GET /auth/google/callback
router.route('/google/callback').get(passport.authenticate('google', { failureRedirect: '/', }), googleCallback)

// @desc    Logout
// @route   GET /auth/logout
router.route('/logout').get(logout)


module.exports = router