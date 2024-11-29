import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Container } from 'react-bootstrap'

const PrivacyPolicy = () => {
    return (
        <div>
            <Header />
                    <div className='contact_img mb-5 d-flex align-items-center justify-content-center'>
                        <h1 style={{ color: "#fff", fontSize: "24px" }}>Privacy Policy</h1>
                    </div>
            <Container className='my-5'>
                <article>
                    <section className='d-flex'>
                        <h1 id="personal-info" className='me-2'>1.</h1>
                        <p id="misc_children">Information Collected: Start by describing the types of personal information you collect from your users, such as name, email address, phone number, and any additional information related to their business or project needs</p>
                    </section>

                    <section className='d-flex'>

                        <h1 id="collection" className='me-2'>2.</h1>

                        <p id="collection_tracking">Return Policy: Start by clearly stating your return policy. Make it easy for users to find the return policy on your website, such as by placing it in a prominent location or providing a link in the footer or header.</p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="use" className='me-2'>3.</h1>
                        <p id="collection_tracking">Eligibility: Explain who is eligible to make a return. For example, do returns apply only to software defects, or can users return the product for any reason?</p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="disclosure" className='me-2'>4.</h1>

                        <p id="disclosure_partners">Timeframe: Specify the timeframe for returns. For example, users may have 30 days from the date of purchase to initiate a return.</p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="storage" className='me-2'>5.</h1>

                        <p id="storage_location">Refund Policy: Explain how refunds will be processed. Will users receive a full refund or a partial refund? Will refunds be issued to the original payment method or as store credit?
                        </p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="misc" className='me-2'>6.</h1>

                        <p id="misc_changes">Return Shipping: Specify who is responsible for return shipping costs. Will you provide a prepaid return label, or will users need to pay for return shipping?</p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="misc" className='me-2'>7.</h1>

                        <p id="misc_changes">Damaged or Defective Products: Explain how you handle returns for damaged or defective products. Will you provide a replacement product or issue a refund?
                        </p>
                    </section>

                    <section className='d-flex'>

                        <h1 id="misc" className='me-2'>8.</h1>

                        <p id="misc_changes"> Exclusions: List any exclusions or limitations to your return policy. For example, you may not accept returns for custom software solutions or other special orders.
                        </p>
                    </section>

                    <section className='d-flex'>

                        <h1 id="misc" className='me-2'>9.</h1>

                        <p id="misc_changes"> How to Initiate a Return: Provide clear instructions on how users can initiate a return. This may include providing a return request form or contact information for your customer service team.
                        </p>
                    </section>

                </article>
            </Container>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy