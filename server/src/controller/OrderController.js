const Order = require("../model/OrderModel")
const twilio = require("twilio")

const OrderData = async (req, res) => {
    try {
        const { shippingInfo, orderItems, itemsPrice, taxPrice, shippingPrice, totalPrice, user } = req.body;
        const order = await Order.create({
            shippingInfo,
            orderItems,
            // paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt: Date.now(),
            user,
        });

        res.status(201).json({
            success: true,
            order,
        });
    } catch (error) {
        res.status(400).send(error)
    }
}

const getOrder = async (req, res) => {

    try {
        const orderinfo = await Order.find();

        res.status(201).send(orderinfo)
    } catch (error) {
        res.status(400).send(error)
    }
}
const smsSender = async (req, res) => {
    console.log(req.body);
    try {
        const accountSid = "ACe9bc0409f9249ea59b9091416a9ab14a";
        const authToken = "ed15e5ac840d524f04cf34c060db18fb";
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: req.body.data,
                from: '+12765799974',
                to: '+919099946540'
            })
            .then(
                message => console.log(message.sid)
            );
    } catch (error) {
        res.status(400).send(error)
    }
}


module.exports = { OrderData, getOrder, smsSender }