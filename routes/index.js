const express = require('express')
const { login, dashboard } = require('../controllers/index')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const router = express.Router()

// @desc    Login/Landing page
// @route   GET /
router.route('/').get(ensureGuest, login)

// @desc    Dashboard
// @route   GET /dashboard
router.route('/dashboard').get(ensureAuth, dashboard)





module.exports = router