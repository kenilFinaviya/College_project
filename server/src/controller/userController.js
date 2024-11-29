const user = require("../model/userModel")
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        // console.log(email);
        const login = await user.findOne({ email: email })
        const ismatch = bcrypt.compare(password, login.password)
        if (ismatch) {
            res.status(200).send(login);
        }

    } catch (error) {
        res.status(400).send(error)
    }
}

const userRegister = async (req, res) => {
    try {
        const { name, role, username, number, email, password } = req.body;
        const register = new user({
            role: role,
            name: name,
            username: username,
            number: number,
            email: email,
            password: password
        })
        // const bpass = bcrypt.hash(password, 10);
        register.password = await bcrypt.hash(register.password, 10);
        const data = await register.save()
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
    }
}

const getAlluser = async (req, res) => {
    try {
        const alluser = await user.find();
        res.status(200).send(alluser)
    } catch (error) {
        res.status(400).send(error)
    }
}

const userdelete = async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteUser = await user.findByIdAndDelete(_id);
        res.status(200).send(deleteUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { userLogin, userRegister, getAlluser, userdelete }