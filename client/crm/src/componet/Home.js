import { Container, Offcanvas, Nav, Navbar, NavDropdown, Form, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import axios from "axios"
import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from "react-router-dom"
import { ColorRing } from 'react-loader-spinner'

const Home = () => {
    const [index, setIndex] = useState(0);
    const [loader, setLoader] = useState(true);
    const [view, setView] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getallproduct')

            .then(function (response) {
                // console.log(response.data);
                setView(response.data);
                setLoader(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    if (loader == true) {
        return (
            <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>

        )


    }
    else {
        return (
            <>

                <Header></Header>


                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 height-carousel"
                            src={require("../image/k1.webp")}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 height-carousel"
                            src={require("../image/k2.webp")}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 height-carousel"
                            src={require("../image/k3.webp")}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100 height-carousel"
                            src={require("../image/f4.jpg")}
                            alt="Fourth slide"
                        />
                    </Carousel.Item> */}
                </Carousel>

                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}
                <div className='container d-flex align-items-center justify-content-center' >
                    <h1 style={{ fontFamily: "'Kanit', sans-serif", textTransform: "lowercase", textDecoration: "underline", textUnderlineOffset: "5px", color: "#444" }}>Product</h1>
                </div>
                <div className="product container my-5">
                    {
                        view.map((val, i) => {
                            return (
                                <div className="product_box" key={i} >
                                    <img src={val.product_image} />
                                    <p>{val.product_name}</p>
                                    <p>₹{val.product_price}</p>
                                    <Link to={`/buynow/${val._id}`}>
                                        <button className='mt-3'>Buy Now</button>
                                    </Link>


                                </div>
                            )
                        })
                    }
                </div>
                <Footer />
            </>
        )
    }

}
export default Home