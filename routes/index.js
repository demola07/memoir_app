const express = require('express')
const { login, dashboard } = require('../controllers/index')

const router = express.Router()

// @desc    Login/Landing page
// @route   GET /
router.route('/').get(login)

// @desc    Dashboard
// @route   GET /dashboard
router.route('/dashboard').get(dashboard)





module.exports = router