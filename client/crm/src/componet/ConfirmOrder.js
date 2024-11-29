import React, { Fragment } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Header from "./Header"
import Footer from "./Footer"
import axios from 'axios'

const ConfirmOrder = () => {

    const navigate = useNavigate()
    const getname = localStorage.getItem("Username")
    const getid = localStorage.getItem("Userid")
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    // const { user } = useSelector((state) => state.user);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    const shippingCharges = subtotal > 50000 ? 0 : 100;

    const tax = subtotal * 0.18;

    const totalPrice = subtotal + tax + shippingCharges;

    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;


    const proceedToPayment = async (amount) => {


        const data = {
            subtotal,
            shippingCharges,
            tax,
            totalPrice,
        };

        sessionStorage.setItem("orderInfo", JSON.stringify(data));


        const { data: { order } } = await axios.post("http://localhost:5000/checkout", {
            amount
        })


        // await axios.post("http://localhost:5000/checkout", {
        //     amount
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

        const options = {
            key: "rzp_test_pSyi3zdbaoMB7K",
            amount: order.amount,
            currency: "INR",
            name: "CRM",
            description: "Wow",
            image: "https://prismic-io.s3.amazonaws.com/vtiger-website/32c7d9ea-2dec-43d2-ace4-afc4ce2e70fa_how-crm-works.svg",
            order_id: order.id,
            // callback_url: "http://localhost:5000/paymentverification",
            handler: function (response) {
                console.log(response, +"22");
                navigate(`/paymentsuccess/${response.razorpay_payment_id}`)
            },
            prefill: {
                name: getname,
                email: "",
                contact: ""
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#fff"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    return (
        <>
            <Header />
            <Fragment>
                {/* <MetaData title="Confirm Order" /> */}
                <CheckoutSteps activeStep={1} />
                <div className="confirmOrderPage">
                    <div>
                        <div className="confirmshippingArea">
                            <Typography>Shipping Info</Typography>
                            <div className="confirmshippingAreaBox">
                                <div>
                                    <p>Name:</p>
                                    <span>{getname}</span>
                                </div>
                                <div>
                                    <p>Phone:</p>
                                    <span>{shippingInfo.phoneNo}</span>
                                </div>
                                <div>
                                    <p>Address:</p>
                                    <span>{address}</span>
                                </div>
                            </div>
                        </div>
                        <div className="confirmCartItems">
                            <Typography>Your Cart Items:</Typography>
                            <div className="confirmCartItemsContainer">
                                {cartItems &&
                                    cartItems.map((item) => (
                                        <div key={item.product}>
                                            <img src={item.image} alt="Product" />
                                            <Link to={`/buynow/${item.product}`}>
                                                {item.name}
                                            </Link>{" "}
                                            <span>
                                                {item.quantity} X ₹{item.price} ={" "}
                                                <b>₹{item.price * item.quantity}</b>
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <div className="orderSummary">
                            <Typography>Order Summery</Typography>
                            <div>
                                <div>
                                    <p>Subtotal:</p>
                                    <span>₹{subtotal}</span>
                                </div>
                                <div>
                                    <p>Shipping Charges:</p>
                                    <span>₹{shippingCharges}</span>
                                </div>
                                <div>
                                    <p>GST:</p>
                                    <span>₹{tax}</span>
                                </div>
                            </div>

                            <div className="orderSummaryTotal">
                                <p>
                                    <b>Total:</b>
                                </p>
                                <span>₹{totalPrice}</span>
                            </div>

                            <button onClick={() => proceedToPayment(totalPrice)}>Proceed To Payment</button>
                        </div>
                    </div>
                </div>
            </Fragment>
            <Footer />
        </>
    );
};

export default ConfirmOrder;