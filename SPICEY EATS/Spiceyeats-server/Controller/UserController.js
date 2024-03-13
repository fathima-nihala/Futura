const users = require('../Modal/UserSchema')


//get all user
const getAllUsers = async (req, res) => {
    try {
        const userData = await users.find({})
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//post a new user
const createUser = async (req, res) => {
    const uuser = req.body;
    const query = { email: uuser.email }
    try {
        const existingUser = await users.findOne(query);
        if (existingUser) {
            return res.status(302).json({ message: "user already exist!" })
        }
        const result = await users.create(uuser)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//delete user
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await users.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'user not found' });
        }
        res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//get admin
const getAdmin = async (req, res) => {
    const email = req.params.email;
    const query = { email: email };
    try {
        const adUser = await users.findOne(query)
        console.log(adUser);
        if (email !== req.decode.email) {
            return res.status(403).send({ message: 'forbiden access' })
        }
        let admin = false;
        if (users) {
            admin = users?.role === 'admin';
        }
        res.status(200).json({ admin })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//make admin of user
const makeAdmin = async (req, res) => {
    const userId = req.params.id;
    const { name, email, photoURL, role } = req.body;
    try {
        const updateUser = await users.findByIdAndUpdate(userId,
            { role: "admin" },
            { new: true, runValidators: true }
        );
        if (!updateUser) {
            return res.status(404).json({ message: "user is not found" })
        }
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    getAdmin,
    makeAdmin,
}