
import "./Footer.css"
import { Row, Col } from "react-bootstrap"
import { GrInstagram, GrFacebook, GrYoutube, GrTwitter, GrLinkedin } from "react-icons/gr"
import { Link } from "react-router-dom"

function Footer() {
    return (<>
        <footer>
            <div class="primary g-0" >
                <Row className="g-0">
                    <Col lg={4}>
                        <div class="col-12 column about">

                            <h3>CRM</h3>

                            <p>
                            Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers
                            </p>

                            <div class="social">
                                <a href="https://www.facebook.com/" style={{ color: "#3b5998", fontSize: "20px" }}><GrFacebook className="me-3" /></a>
                                <a href="https://www.instagram.com/" style={{ color: "#d62976", fontSize: "20px" }}><GrInstagram className="me-3" /></a>
                                <a href="https://www.youtube.com/" style={{ color: "#FF0000", fontSize: "20px" }}><GrYoutube className="me-3" /></a>
                                <a href="https://www.twitter.com/" style={{ color: "#00acee", fontSize: "20px" }}><GrTwitter className="me-3" /></a>
                                <a href="https://www.linkedin.com/" style={{ color: " #0A66C2", fontSize: "20px" }}><GrLinkedin className="me-3" /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div class="col column links">
                            <h3>Main menu</h3>

                            <ul>
                                <li>
                                    <Link to="/"><i className="fas fa-chevron-right me-2"></i>Home</Link>
                                </li>
                                <li>
                                    <Link to="/allproduct"><i className="fas fa-chevron-right me-2"></i>All Product</Link>
                                </li>
                                <li>
                                    <Link to="/about"><i className="fas fa-chevron-right me-2"></i>About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact"><i className="fas fa-chevron-right me-2"></i>Contact Us</Link>
                                </li>
                            </ul>

                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="col column links">
                            <h3>Quick links</h3>
                            <ul>
                                <li>
                                    <Link to="/PrivacyPolicy"><i className="fas fa-chevron-right me-2"></i>privacy policy</Link>
                                </li>
                                <li>
                                    <Link to="/Termsandconditions"><i className="fas fa-chevron-right me-2"></i>Terms & conditions</Link>
                                </li>
                                <li>
                                    <Link to="/faq"><i className="fas fa-chevron-right me-2"></i>FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="col column links">
                            <h3>Contact</h3>
                            <ul>
                                <li>
                                    <i class="fas fa-map-marker-alt me-2"></i>Navrangpura, Ahemdabad.
                                </li>
                                <li>
                                    <i class="fas fa-mobile-alt me-2"></i>+91 9099946540
                                </li>
                                <li>
                                    <i class="far fa-envelope me-2"></i>crmproject@demo.com
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>




            </div>
        </footer>
    </>)
}
export default Footer