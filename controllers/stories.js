const Story = require('../models/Story')

exports.getAddStoriesPage = (req, res) => {
    res.render('stories/add')
}

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