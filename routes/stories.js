const express = require('express')
const { getAddStoriesPage, createStories, getAllStories, getSingleStory, editStory, updateStory, deleteStory, getUserStories } = require('../controllers/stories')
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

// @desc    Show single story
// @route   GET /stories/:id
router.route('/:id').get(ensureAuth, getSingleStory)

// @desc    Show edit page
// @route   GET /stories/edit/:id
router.route('/edit/:id').get(ensureAuth, editStory)

// @desc    Update Story
// @route   PUT /stories/:id
router.route('/:id').put(ensureAuth, updateStory)

// @desc    Delete Story
// @route   DELETE /stories/:id
router.route('/:id').delete(ensureAuth, deleteStory)

// @desc    User stories
// @route   GET /stories/add
router.route('/user/:userId').get(ensureAuth, getUserStories)

module.exports = router