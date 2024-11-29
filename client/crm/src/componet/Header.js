import React from "react";
import { Container, Offcanvas, Nav, Navbar, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const Navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const deleteHandle = () => {
    localStorage.clear();
    Navigate("/");
  };
  const getName = localStorage.getItem("Name");

  if (getName != null) {
    return (
      <div>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Container fluid>
              <Navbar.Brand href="/">
                <img src={require("../image/d1.avif")} width="150" alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    Wow
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/allproduct">All Product</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link> 
                  </Nav>
                  <Nav>
                    <Dropdown>
                      <Dropdown.Toggle variant="white" id="dropdown-basic">
                        User
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={deleteHandle}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link href="/cart">
                      <AiOutlineShoppingCart />
                      <span
                        className="badge badge-warning"
                        id="lblCartCount"
                      >
                        {cartItems.length}
                      </span>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Container fluid>
              <Navbar.Brand href="/">
                <img src={require("../image/d1.avif")} width="150" alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    Wow
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/allproduct">All Product</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                  </Nav>
                  <Nav>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        User
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/Login">Login</Dropdown.Item>
                        <Dropdown.Item href="/Register">Register</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    );
  }
};

export default Header;
