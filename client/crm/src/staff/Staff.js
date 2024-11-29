import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
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



const Staff = () => {


    const [Data, setData] = useState([])
    const [Order, setOrder] = useState([])
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/admin/getOrder")
            .then(function (response) {
                console.log(response.data);
                // setData1(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const deletehandlar = (id) => {
        // alert(id)

        axios.get(`http://localhost:5000/userdelete/${id}`)
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const Inquire = () => {
        axios.post("http://localhost:5000/smsSender")
            .then(function (response) {
                // console.log(response);
                // setData("abc")
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // useEffect(async () => {
    //     const data = await axios.get("http://localhost:5000/getAlluser")
    //     // console.log(data);

    //     const filterdata = data.data.filter((Organi) => Organi.role === "Staff")
    //     setData(filterdata);
    //     console.log(filterdata);

    // }, [])

    axios.get("http://localhost:5000/getAlluser")
        .then(function (response) {
            const filterdata = response.data.filter((Organi) => Organi.role === "Customer")
            console.log(filterdata);
            setData(filterdata);
        })
        .catch(function (error) {
            console.log(error);
        })


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
                        {/* <img src="dist/img/AdminLTELogo.png" alt="Admin" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} /> */}
                        <span className="brand-text font-weight-light">Organization / Staff</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}
                                {/* <li className="nav-item menu-open">
                                    <Link to="/staff/dashboard" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </Link>
                                </li> */}
                                <li class="nav-item">
                                    <Link to="/staff/dashboard" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Organization</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/staff" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Staff</p>
                                    </Link>
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
                                    <h1 className="m-0">Staff</h1>
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
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>{Data.length}</h3>
                                            <p>Customer</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-bag" />
                                        </div>
                                        {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a> */}
                                    </div>
                                </div>
                            </div>
                            <h4>Customer Enrollment</h4>
                            <div className="row">
                                <div class="card-body">
                                    <table id="example2" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Index</th>
                                                <th>Name</th>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Mobile no.</th>
                                                <th>delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Data.map((val, i) => {
                                                    return (
                                                        <tr key={val._id}>
                                                            <td>{i + 1}</td>
                                                            <td>{val._id}</td>
                                                            <td>{val.name}</td>
                                                            <td>{val.username}</td>
                                                            <td>{val.email}</td>
                                                            <td>{val.number}</td>
                                                            <td><button onClick={() => deletehandlar(val._id)}>delete</button></td>
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
                    <section className="content">
                        <div className="container-fluid">
                            {/* Small boxes (Stat box) */}
                            <h4>Inquire</h4>
                            <div className="row">
                                <div class="card-body">
                                    <table id="example2" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Index</th>
                                                <th>productId</th>
                                                <th>Name</th>
                                                <th>price</th>
                                                <th>quantity</th>
                                                <th>stock</th>
                                                <th>Total</th>
                                                <th>status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map((val, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{i + 1}</td>
                                                            <td>{val.product}</td>
                                                            <td>{val.name}</td>
                                                            <td>{val.price}</td>
                                                            <td>{val.quantity}</td>
                                                            <td>{val.stock}</td>
                                                            <td>{(val.price * val.quantity)}</td>
                                                            <td><button onClick={Inquire}>status</button></td>
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
                <footer className="main-footer">
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.2.0
                    </div>
                </footer>
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
export default Staff;