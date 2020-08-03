const express = require('express')
const { getAddStoriesPage, createStories, getAllStories, getSingleStory, editStory, updateStory, deleteStory, getUserStories } = require('../controllers/stories')
const { ensureAuth } = require('../middleware/auth')

const router = express.Router()


router.route('/add').get(ensureAuth, getAddStoriesPage)

router.route('/').post(ensureAuth, createStories)

router.route('/').get(ensureAuth, getAllStories)

router.route('/:id').get(ensureAuth, getSingleStory)


router.route('/edit/:id').get(ensureAuth, editStory)


router.route('/:id').put(ensureAuth, updateStory)


router.route('/:id').delete(ensureAuth, deleteStory)


router.route('/user/:userId').get(ensureAuth, getUserStories)

module.exports = router