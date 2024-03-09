const user = require('../Modal/UserSchema')
// const { use } = require('../Router/UserRouter')
//get all user

const getAllUsers = async (req, res) => {
    try {
        const userData = await user.find({})
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports={
    getAllUsers,
}