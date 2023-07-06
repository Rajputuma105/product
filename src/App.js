// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// Import other React Component
import AddProduct from "./components/createProduct";
import ProductList from "./components/todayProduct";
import ProductsList from "./components/topSellProduct";
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <h3>Product App</h3>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/addProduct"} className="nav-link">
                    Add Product
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/getTodayproducts"} className="nav-link">
                    Today Selling Product List
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/getTopproducts"} className="nav-link">
                    Top 5 Selling Product List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/addProduct" element={<AddProduct />} />
                  <Route path="/getTodayproducts" element={<ProductList />} />
                  <Route path="/getTopproducts" element={<ProductsList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
