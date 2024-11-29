import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'

const Termsandconditions = () => {
    return (
        <div>
            <Header />
            <div className='contact_img mb-5 d-flex align-items-center justify-content-center'>
                <h1 style={{ color: "#fff", fontSize: "24px" }}>Terms & conditions</h1>
            </div>
            <Container className="my-5">
                <article>
                    <section className='d-flex'>
                        <h1 id="personal-info" className='me-2'>1.</h1>
                        <p id="misc_children">Agreement to Terms By accessing and using our website, you agree to these terms and conditions as well as our Privacy Policy. If you do not agree to these terms, you should not use our website.</p>
                    </section>

                    <section className='d-flex'>

                        <h1 id="collection" className='me-2'>2.</h1>

                        <p id="collection_tracking">Use of Website You may use our website for your personal, non-commercial use only. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from our website.</p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="use" className='me-2'>3.</h1>
                        <p id="collection_tracking">Product Information We make every effort to provide accurate and up-to-date information about our products. However, we cannot guarantee that all information on our website is error-free or complete. We reserve the right to correct any errors or omissions on our website and to update product information at any time without prior notice.</p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="disclosure" className='me-2'>4.</h1>

                        <p id="disclosure_partners">Prescription Medications Prescription medications can only be dispensed with a valid prescription from a licensed healthcare provider. It is your responsibility to ensure that you have a valid prescription for any prescription medications you order from our website.</p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="storage" className='me-2'>5.</h1>

                        <p id="storage_location">Disclaimer of Warranties We make no representations or warranties of any kind, express or implied, as to the operation of our website or the information, content, materials, or products included on our website. You expressly agree that your use of our website is at your sole risk.
                        </p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="misc" className='me-2'>6.</h1>

                        <p id="misc_changes">Limitation of Liability We shall not be liable for any damages, including but not limited to direct, indirect, incidental, punitive, and consequential damages, arising from the use or inability to use our website or any of our products or services.</p>

                    </section>

                    <section className='d-flex'>

                        <h1 id="misc" className='me-2'>7.</h1>

                        <p id="misc_changes">Governing Law These terms and conditions shall be governed by and construed in accordance with the laws of the state where our store is located, without giving effect to any principles of conflicts of law.
                        </p>
                    </section>

                    <section className='d-flex'>

                        <h1 id="misc" className='me-2'>8.</h1>

                        <p id="misc_changes"> Changes to Terms and Conditions We reserve the right to change these terms and conditions at any time without prior notice. Any changes will be effective immediately upon posting on our website.
                        </p>
                    </section>

                    <section className='d-flex'>

                        <h1 id="misc" className='me-2'>9.</h1>

                        <p id="misc_changes"> If you have any questions or concerns about our terms and conditions, please contact us. Thank you for using our medical store website.
                        </p>
                    </section>

                </article>
            </Container>
            <Footer />
        </div>
    )
}

export default Termsandconditions