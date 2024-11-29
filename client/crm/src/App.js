import "./App.css";
import Register from "./componet/Register";
import Login from "./componet/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./componet/Home";
import Footer from "./componet/Home";
import About from "./componet/About";
import Contact from "./componet/Contact";
import Header from "./componet/Header";
import Dashboard from "./Admin/Dashboard";
import Form from "./Admin/Form";
import View_products from "./Admin/View_products";
import Editproduct from "./Admin/Editproduct";
import Buynow from "./componet/Buynow";
import Cart from "./componet/Cart";
import Shipping from "./componet/Shipping";
import ConfirmOrder from "./componet/ConfirmOrder";
import Paymentsuccess from "./componet/Paymentsuccess";
import Dashboard1 from "./staff/Dashboard";
import Staff from "./staff/Staff";
import Allproduct from "./componet/Allproduct";
import PrivacyPolicy from "./componet/PrivacyPolicy";
import Faq from "./componet/Faq";
import Termsandconditions from "./componet/Termsandconditions";
import Order from "./Admin/Order";
import axios from "axios";
import { useEffect, useState } from "react";
import Inquire from "./Admin/Inquire";
import Quotation from "./Admin/Quotation";

function App() {
  const getName = localStorage.getItem("Name");
  const role = localStorage.getItem("role");
  // const [Data, setData] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/header" element={<Header />} />
        <Route
          path="/dashboard"
          element={getName == "Admin" ? <Dashboard /> : <Login />}
        />
        <Route path="/Dashboard/form/Addproduct" element={<Form />} />
        <Route path="/Dashboard/form/viewproduct" element={<View_products />} />
        <Route
          path="/Dashboard/form/editproduct/:id"
          element={<Editproduct />}
        />
        <Route path="/buynow/:id" element={<Buynow />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess/:id" element={<Paymentsuccess />} />
        <Route
          path="/staff/dashboard"
          element={
            role === "Staff" ||
            role === "Organization" ||
            getName == "Admin" ? (
              <Dashboard1 />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/staff" element={<Staff />} />
        <Route path="/allproduct" element={<Allproduct />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/Termsandconditions" element={<Termsandconditions />} />
        <Route path="/Dashboard/order" element={<Order />} />
        <Route path="/inquire" element={<Inquire />} />
        <Route path="/quotation" element={<Quotation />} />
      </Routes>
    </div>
  );
}

export default App;
