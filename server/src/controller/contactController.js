const contact = require("../model/ContactModel")

const help = async (req, res) => {

    try {
        const create = new contact({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            message: req.body.message
        });
        const response = await create.save();
        res.status(201).send(response);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

module.exports = { help }