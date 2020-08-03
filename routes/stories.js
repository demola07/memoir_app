const express = require('express')
const { getAddStoriesPage, createStories, getAllStories } = require('../controllers/stories')
const { ensureAuth } = require('../middleware/auth')

const router = express.Router()

// @desc    Show add page
// @route   GET /stories/add
router.route('/add').get(ensureAuth, getAddStoriesPage)


// @desc    Process add form
// @route   POST /stories
router.route('/').post(ensureAuth, createStories)

// @desc    Show all stories
// @route   GET /stories
router.route('/').get(ensureAuth, getAllStories)






module.exports = router