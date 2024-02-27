const router = require('express').Router()
const KriteUser = require('../Modal/UserSchema')

router.post('/userpost', async (req, res) => {
    console.log('yyyyyyyyyyyyyyy', req.body);

    const task = KriteUser({
        firstname: req.body.firstname,
        email: req.body.email,
        password: req.body.password
    })
    console.log('task', task);

    try {
        const SavedData = task.save()
        res.status(200).json(SavedData)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router