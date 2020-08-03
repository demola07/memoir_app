const Story = require('../models/Story')

// @desc    Show add page
// @route   GET /stories/add
exports.getAddStoriesPage = (req, res) => {
    res.render('stories/add')
}

// @desc    Process add form
// @route   POST /stories
exports.createStories = async (req, res) => {
    try {
        req.body.user = req.user.id
        await Story.create(req.body)
        res.redirect('/dashboard')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
}

// @desc    Show all stories
// @route   GET /stories
exports.getAllStories = async (req, res) => {
    try {
        const stories = await Story.find({ status: 'public' }).populate('user').sort({ createdAt: 'desc' }).lean()

        res.render('stories/index', {
            stories
        })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
}

// @desc    Show single story
// @route   GET /stories/:id
exports.getSingleStory = async (req, res) => {
    try {
        let story = await Story.findById(req.params.id)
            .populate('user')
            .lean()

        if (!story) {
            return res.render('error/404')
        }

        res.render('stories/show', {
            story
        })

    } catch (err) {
        console.error(err)
        res.render('error/404')
    }
}

// @desc    Show edit page
// @route   GET /stories/edit/:id
exports.editStory = async (req, res) => {
    try {
        const story = await Story.findOne({ _id: req.params.id }).lean()

        if (!story) {
            return res.render('error/404')
        }

        if (story.user != req.user.id) {
            res.redirect('/stories')
        } else {
            res.render('stories/edit', {
                story
            })
        }
    } catch (err) {
        console.error(err);
        return res.render('error/500')
    }

}

// @desc    Update Story
// @route   PUT /stories/:id
exports.updateStory = async (req, res) => {
    try {
        let story = await Story.findById(req.params.id).lean()

        if (!story) {
            return res.render('error/404')
        }

        if (story.user != req.user.id) {
            res.redirect('/stories')
        } else {
            story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
                new: true,
                runValidators: true
            })
            res.redirect('/dashboard')
        }
    } catch (err) {
        console.error(err);
        return res.render('error/500')
    }

}

// @desc    Delete Story
// @route   DELETE /stories/:id
exports.deleteStory = async (req, res) => {
    try {
        await Story.remove({ _id: req.params.id })
        res.redirect('/dashboard')
    } catch (err) {
        console.error(err);
        return res.render('error/500')
    }
}

// @desc    User stories
// @route   GET /stories/add
exports.getUserStories = async (req, res) => {
    try {
        const stories = await Story.find({ user: req.params.userId, status: 'public' })
            .populate('user')
            .lean()

        res.render('stories/index', {
            stories
        })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
}