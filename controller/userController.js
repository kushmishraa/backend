const User = require("../Models/testModelUser");

const addUser = async (req, res) => {
    if (req.body) {
        console.log(req.body);
        const { name, lastName } = req.body;
        const newUser = {
            name,
            lastName
        }
        const userSaved = await new User(newUser).save();
        console.log(userSaved);
    }
}

const findUser = async (req, res) => {
    if (req.body) {
        const { name } = req.body
        const findedUser = await User.find({ name })
        console.log(findedUser);
        res.status(200).send({ userList: findedUser });
        res.end();
    }
}

const updateUserByName = async (req, res) => {
    if (req.body) {
        const updatedRecords = await User.updateOne({ name: "kush" }, { name: "updatedKush" });
        console.log(updatedRecords && "useUpdated");
    }
}

const deleteUserByName = async (req, res) => {
    if (req.body) {
        const { name } = req.body;
        const deletedUser = await User.deleteOne({ name });
        console.log(deletedUser);
    }
    res.end();
}

module.exports = {
    addUser,
    findUser,
    updateUserByName,
    deleteUserByName
}