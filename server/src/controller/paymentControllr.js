const Razorpay = require('razorpay');

var instance = new Razorpay({
    key_id: 'rzp_test_pjVRQBsp21CfyE',
    key_secret: 'geoV2r0qVu28xszQNcqD4rRY',
});

const checkout = async (req, res) => {
    console.log(req.body);
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };

    const order = await instance.orders.create(options);
    console.log(order);
    
    res.status(200).json({
        success: true,
        order,
    });
}

module.exports = { checkout }