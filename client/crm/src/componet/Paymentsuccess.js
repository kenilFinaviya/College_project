import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import axios from "axios"

const Paymentsuccess = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const getid = localStorage.getItem("userid")

  axios.post("http://localhost:5000/admin/order", {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
    user: getid,
  })
    .then(function (res) {
      console.log(res);
    })
    .then(function (error) {
      console.log(error);
    })

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center' style={{ flexDirection: "column" }}>
        <img src={require("../image/success.gif")} alt="Jane" />
        <h4>payment successful</h4>
        <Link to="/allproduct"><button style={{ background: "#000", color: "#fff", padding: "10px 15px" }} className="my-2">View more product</button></Link>
      </div>
    </div>
  )
}

export default Paymentsuccess