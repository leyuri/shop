import './App.css';
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import Data from './data.js'

import { Link, Route, Switch } from 'react-router-dom'

function App() {

  const [shoes, setShoes] = useState(Data)

  return (
    <div className="App">
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Shoe Shop 👟
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Route exact path="/">
          <Card className="text-center backgroud">
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
              <br />
              <br />
              <h1>20% Season Off.</h1>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              <Card.Text>
                This site offer a biggest sale product in the Korea.
                We hope you to enjoy here
              </Card.Text>
              <Button variant="light">Shop Gifts</Button>
              <br />
              <br />
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
          </Card>

          <div className="container">
            <div className="row">
              {shoes.map((item, index) => {
                return (<ShoesCard key={index} shoes={item} index={index} />)
                // return (<ShoesCard key={index} shoes={shoes[index]} />)
              })}
            </div>
          </div>

        </Route>
        <Route path="/detail">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button>
              </div>
            </div>
          </div>
        </Route>
        {/* <Route path="어쩌구" component={Modal}></Route> */}
      </>
    </div>
  );
}

function ShoesCard(props) {
  return (
    <div className="col-md-4">
      <img alt="" src={`https://codingapple1.github.io/shop/shoes` + (props.index + 1) + `.jpg`} width="100%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}
export default App;

