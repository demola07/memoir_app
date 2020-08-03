const express = require('express')
const { login, dashboard } = require('../controllers/index')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const router = express.Router()


router.route('/').get(ensureGuest, login)

router.route('/dashboard').get(ensureAuth, dashboard)

module.exports = router