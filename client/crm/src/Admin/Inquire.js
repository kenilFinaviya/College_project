import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../redux/actions/cartAction";

var i = false;
const handel = () => {
    if (i == true) {
        document.getElementById('submenu1').style.display = 'none';
        i = false;
    }
    else if (i == false) {
        document.getElementById('submenu1').style.display = "block";
        i = true;
    }
}



const Inquire = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);
    const [Data, setData] = useState([])

    const Inquire1 = () => {

        axios.post("http://localhost:5000/smsSender", {
            data: "Thanks for visit our company and send inquiry. As per your inquiry, You intrested in Activated Charcoal Forming Face wash and it's price is ₹798.You want 500 quantity of this product. It's stock is available. Your total amount is 3,99,000 + 18% GST extra. Your total ammount for pay is  ₹470820.",
        })
            .then(function (response) {
                console.log(response);
                // setData("abc")
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // const subtotal = cartItems.reduce(
    //     (acc, item) => acc + item.quantity * item.price,
    //     0
    // );

    // console.log(subtotal);

    // const tax = subtotal * 0.18;

    // const totalPrice = subtotal + tax;


    // useEffect(async () => {
    //     const data = await axios.get("http://localhost:5000/getAlluser")
    //     // console.log(data);

    //     const filterdata = data.data.filter((Organi) => Organi.role === "Staff")
    //     setData(filterdata);
    //     console.log(filterdata);

    // }, [])

    // axios.get("http://localhost:5000/getAlluser")
    //     .then(function (response) {
    //         const filterdata = response.data.filter((Organi) => Organi.role === "Customer")
    //         console.log(filterdata);
    //         setData(filterdata);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })


    return (
        <>
            <div className="wrapper">

                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>

                </nav>

                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link" style={{ textDecoration: 'none' }}>
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">Admin</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block" style={{ textDecoration: 'none' }}>Kenil Finaviya</a>
                            </div>
                        </div>
                        {/* SidebarSearch Form */}
                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                            {/* <i className="right fas fa-angle-left" /> */}
                                        </p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Dashboard/order" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Order</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/inquire" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Inquire</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/quotation" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Quotation</p>
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={handel}>
                                    <a className="nav-link" >
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            Product
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview" id="submenu1" >
                                        <li className="nav-item">
                                            <Link to="/Dashboard/form/Addproduct" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add Product</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/Dashboard/form/viewproduct" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>View Product</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Inquire</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        {/* <li className="breadcrumb-item"><a href="#">Home</a></li> */}
                                        {/* <li className="breadcrumb-item active">Dashboard </li> */}
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}

                    <section className="content">
                        <div className="container-fluid">
                            {/* Small boxes (Stat box) */}
                            <div className="row">
                                <div class="card-body">
                                    <table id="example2" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>productId</th>
                                                <th>Name</th>
                                                <th>price</th>
                                                <th>quantity</th>
                                                <th>stock</th>
                                                <th>Total</th>
                                                <th>Send</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map((val, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{val.product}</td>
                                                            <td>{val.name}</td>
                                                            <td>{val.price}</td>
                                                            <td>{val.quantity}</td>
                                                            <td>{val.stock}</td>
                                                            <td>{(val.price * val.quantity)}</td>
                                                            <td><button onClick={Inquire1}>status</button></td>
                                                        </tr>
                                                        // <div className='d-flex'>
                                                        //     <h1>{val.name}</h1>
                                                        //     <h1>{val.email}</h1>
                                                        //     <h1>{val.username}</h1>
                                                        //     <h1>{val.number}</h1>
                                                        // </div>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>
            {/* ./wrapper */}


        </>
    )
}
export default Inquire