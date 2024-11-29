import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from "axios"

var i = false;
const handel = () => {

    if (i == true) {
        document.getElementById('submenu1').style.display = 'none';
        i = false;
    }
    else if (i == false) {
        document.getElementById('submenu1').style.display = 'block';
        i = true;
    }

}

const View_products = () => {
    const [view, setView] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:5000/getallproduct')

            .then(function (response) {
                // console.log(response);   
                setView(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    const deletehendle = (id) => {
        axios.delete(`http://localhost:5000/deleteproduct/${id}`)

            .then(function (response) {
                // console.log(response.data);
                navigate("/dashboard")
            })

            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="hold-transition sidebar-mini">
                <div className="wrapper">
                    {/* Navbar */}
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        {/* Left navbar links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a className="nav-link">Home</a>
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
                        <a href="../../index3.html" className="brand-link">
                            <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-light">Admin</span>
                        </a>
                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user (optional) */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block">Kenil Finaviya</a>
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
                                    {/* Add icons to the links using the .nav-icon className
         with font-awesome or any other icon font library */}
                                    <li className="nav-item">
                                        <Link to="/dashboard" className="nav-link">
                                            <i className="nav-icon fas fa-tachometer-alt" />
                                            <p>
                                                Dashboard
                                                {/* <i className="right fas fa-angle-left" /> */}
                                            </p>
                                        </Link>
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
                                    <li className="nav-item menu-open">
                                        <a className="nav-link active" >
                                            <i className="nav-icon fas fa-edit" />
                                            <p>
                                                Product
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview" >
                                            <li className="nav-item">
                                                <Link to="/Dashboard/form/Addproduct" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Add Product</p>
                                                </Link>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>View Product</p>
                                                </a>
                                            </li> */}
                                            <li class="nav-item">
                                                <a href="#" class="nav-link active">
                                                    <i class="far fa-circle nav-icon"></i>
                                                    <p>View Product</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="nav-icon fas fa-table" />
                                            <p>
                                                Tables
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview" >
                                            <li className="nav-item">
                                                <Link to="/Dashboard/Table" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>DataTables</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </nav>
                            {/* /.sidebar-menu */}
                        </div>
                        {/* /.sidebar */}
                    </aside>
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>View Product</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">View Product</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    {/* left column */}

                                    <div className='product'>
                                        {
                                            view.map((val, i) => {
                                                return (
                                                    <div className='view_product' key={i}>
                                                        <img src={val.product_image} className='viewproduct_img'></img>
                                                        <h2>Product Name : {val.product_name}</h2>
                                                        <h4>Price : ₹{val.product_price}</h4>
                                                        <h4>Stock : {val.product_stock}</h4>
                                                        <h4>Category : {val.product_catagory}</h4>
                                                        <Link to={`/Dashboard/form/editproduct/${val._id}`}>
                                                            <button className='mt-3 me-5 btn btn-primary' style={{ border: 'none', padding: '6px 25px' }}>Edit</button>
                                                        </Link>
                                                        <button className='mt-3 btn btn-danger' style={{ border: 'none', padding: '6px 25px' }} onClick={() => deletehendle(val._id)} >Delete</button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* /.content */}
                    </div>
                    {/* /.content-wrapper */}

                    {/* /.control-sidebar */}
                </div>
                {/* ./wrapper */}
            </div>
        </div>
    )
}

export default View_products