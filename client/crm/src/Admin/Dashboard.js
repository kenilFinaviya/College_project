import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from 'chart.js';

chartjs.register(
    ArcElement, Tooltip, Legend
)

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



function Dashboard() {

    const [Customer, setCustomer] = useState([]);
    const [User, setUser] = useState([]);
    const [Organization, setOrganization] = useState([]);
    const [Staff, setStaff] = useState([]);
    const [Product, setProduct] = useState([]);

    axios.get("http://localhost:5000/getAlluser")
        .then(function (response) {
            const cusData = response.data.filter((Organi) => Organi.role === "Customer")
            const OrgData = response.data.filter((Organi) => Organi.role === "Organization")
            const StaData = response.data.filter((Organi) => Organi.role === "Staff")
            setCustomer(cusData);
            setUser(response.data);
            setOrganization(OrgData);
            setStaff(StaData);
        })
        .catch(function (error) {
            console.log(error);
        })

    useEffect(() => {
        axios.get("http://localhost:5000/getallproduct")
            .then(function (response) {
                setProduct(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    let outOfStock = 0;
    Product.forEach((item) => {
        if (item.product_stock === 0) {
            outOfStock += 1;
        }
    })
    // outOfStock, products.length - outOfStock
    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [outOfStock, Product.length - outOfStock],
            },
        ],
    };

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
                                    <h1 className="m-0">Dashboard</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                                            <h3>{User.length - 1}</h3>
                                            <p>Total User</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-bag" />
                                        </div>
                                        {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a> */}
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>{Customer.length}</h3>
                                            <p>Customer</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars" />
                                        </div>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>{Organization.length}</h3>
                                            <p>Organization</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-danger">
                                        <div className="inner">
                                            <h3>{Staff.length}</h3>
                                            <p>Staff</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-pie-graph" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-dark">
                                        <div className="inner">
                                            <h3>{Product.length}</h3>
                                            <p>Product</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars" />
                                        </div>
                                    </div>
                                </div>
                                {/* ./col */}
                            </div>
                            {/* /.row */}
                            {/* Main row */}
                            <div className="row">
                                {/* Left col */}
                                <section className="col-lg-7 connectedSortable">
                                    {/* Custom tabs (Charts with tabs)*/}
                                    <div className="card">
                                        {/* <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-chart-pie mr-1" />
                                                Sales
                                            </h3>
                                            <div className="card-tools">
                                                <ul className="nav nav-pills ml-auto">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>/.card-header */}
                                        <div className="card-body">
                                            <Doughnut data={doughnutState} />
                                        </div>{/* /.card-body */}
                                    </div>

                                </section>
                                {/* /.Left col */}
                                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                                <section className="col-lg-5 connectedSortable">
                                    {/* Map card */}
                                    {/* <div className="card bg-gradient-primary"> */}
                                    {/* <div className="card-header border-0"> */}
                                    {/* <h3 className="card-title">
                                                <i className="fas fa-map-marker-alt mr-1" />
                                                Visitors
                                            </h3> */}
                                    {/* card tools */}
                                    {/* <div className="card-tools">
                                                <button type="button" className="btn btn-primary btn-sm daterange" title="Date range">
                                                    <i className="far fa-calendar-alt" />
                                                </button>
                                                <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div> */}
                                    {/* /.card-tools */}
                                    {/* </div> */}
                                    {/* <div className="card-body">
                                            <div id="world-map" style={{ height: 250, width: '100%' }} />
                                        </div> */}
                                    {/* /.card-body*/}
                                    <div className="card-footer bg-transparent">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <div id="sparkline-1" />
                                                <div className="text-white">Visitors</div>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div id="sparkline-2" />
                                                <div className="text-white">Online</div>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div id="sparkline-3" />
                                                <div className="text-white">Sales</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    <div className="card bg-gradient-success">
                                        <div className="card-header border-0">
                                            <h3 className="card-title">
                                                <i className="far fa-calendar-alt" />
                                                Calendar
                                            </h3>
                                            {/* tools card */}
                                            <div className="card-tools">
                                                {/* button with a dropdown */}
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset={-52}>
                                                        <i className="fas fa-bars" />
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a href="#" className="dropdown-item">Add new event</a>
                                                        <a href="#" className="dropdown-item">Clear events</a>
                                                        <div className="dropdown-divider" />
                                                        <a href="#" className="dropdown-item">View calendar</a>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                            {/* /. tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body pt-0">
                                            {/*The calendar */}
                                            <div id="calendar" style={{ width: '100%' }} />
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </section>
                                {/* right col */}
                            </div>
                            {/* /.row (main row) */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div >
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
                < aside className="control-sidebar control-sidebar-dark" >
                    {/* Control sidebar content goes here */}
                </aside >
                {/* /.control-sidebar */}
            </div >
            {/* ./wrapper */}


        </>
    )
}
export default Dashboard;