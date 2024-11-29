import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from "react-router-dom"
import axios from "axios"
import { Row, Col } from "react-bootstrap"
import { Container } from 'react-bootstrap';

const Allproduct = () => {
  const [view, setView] = useState([]);
  // alert()
  useEffect(() => {
    axios.get('http://localhost:5000/getallproduct')
      .then(function (response) {
        setView(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])



  const categoryHandlar = (name) => {
    // alert(name)

    axios.get('http://localhost:5000/getallproduct')

      .then(function (response) {
        const filterdata = response.data.filter((Organi) => Organi.product_catagory === name)
        if (name == "All") {
          setView(response.data);
        }
        else {

          setView(filterdata);
        }

      })
      .catch(function (error) {
        console.log(error);
      })
  }
  // const name = "";
  // if (name == "") {
  //   categoryHandlar("")
  // }
  return (

    <>
      <Header />
      <div className='contact_img mb-5 d-flex align-items-center justify-content-center'>
        <h1 style={{ color: "#fff", fontSize: "24px" }}>All Product</h1>
      </div>
      <Container>
        <Row>
          <Col lg={2} className="my-5">
            <h2 className='mb-4' style={{textTransform:"uppercase",textDecoration:"underline",fontSize:"24px"}}>Category</h2>
            <p style={{ cursor: "pointer" }} onClick={() => categoryHandlar("All")}>All</p>
            <p style={{ cursor: "pointer" }} onClick={() => categoryHandlar("hair oil")}>Hair Oil</p>
            <p style={{ cursor: "pointer" }} onClick={() => categoryHandlar("facewash")}>Facewash</p>
            <p style={{ cursor: "pointer" }} onClick={() => categoryHandlar("shampoo")}>Shampoo</p>
            <p style={{ cursor: "pointer" }} onClick={() => categoryHandlar("conditioner")}>Conditioner</p>
            <p style={{ cursor: "pointer" }} onClick={() => categoryHandlar("bodywash")}>Body Wash</p>
          </Col>
          <Col lg={10} >
            <div className="product container my-5">
              {
                view.map((val, i) => {
                  return (
                    <div className="product_box pb" key={i} >
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
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )

}
export default Allproduct;           