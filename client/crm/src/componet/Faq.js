import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Accordion, Container } from "react-bootstrap"
const Faq = () => {
  return (
    <div>
      <Header />
      <div className=' mb-5 d-flex align-items-center justify-content-center'>
        <h1 style={{ color: "#000", fontSize: "24px" }}>Frequently Asked Question</h1>
      </div>
      <Container className='my-5'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What products do you sell?</Accordion.Header>
            <Accordion.Body>
              We sell a wide range of medical products, including prescription medications, over-the-counter medications, medical supplies and equipment, vitamins and supplements, and personal care items.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I place an order?</Accordion.Header>
            <Accordion.Body>
              You can place an order on our website or in-person at our store. If you place an order on our website, you can choose to have it delivered to your home or pick it up at our store.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2 ">
            <Accordion.Header>How long will it take for my order to be delivered?</Accordion.Header>
            <Accordion.Body>
              Delivery times may vary depending on your location and the availability of the product. We strive to deliver your order as soon as possible, and you will receive a confirmation email with tracking information once your order has been shipped.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3 ">
            <Accordion.Header>What payment methods do you accept?</Accordion.Header>
            <Accordion.Body>
              We accept a variety of payment methods, including credit/debit cards, PayPal, and online bank transfers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4 ">
            <Accordion.Header>Do you require a prescription for prescription medications?</Accordion.Header>
            <Accordion.Body>
              Yes, we require a valid prescription from a licensed healthcare provider for all prescription medications. You can either bring in a physical copy of the prescription or have your healthcare provider send it to us electronically.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <Footer />

    </div>
  )
}

export default Faq