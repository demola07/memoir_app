const express = require('express')
const { getAddStoriesPage, createStories, getAllStories, editStory } = require('../controllers/stories')
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

// @desc    Show edit page
// @route   GET /stories/edit/:id
router.route('/edit/:id').get(ensureAuth, editStory)





module.exports = router