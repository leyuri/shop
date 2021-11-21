import './App.css';
import React, { useState, useContext } from 'react'
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import Data from './Data.js'
import { Link, Route, Switch } from 'react-router-dom'
import Detail from './Detail';
import axios from 'axios';

export let stockContext = React.createContext();

function App() {

  const [shoes, setShoes] = useState(Data)
  let [stock, setStock] = useState([10, 11, 12])

  return (
    <div className="App">
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand ><Link to="/">Shoe Shop 👟</Link>
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
                <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Card className="text-center backgroud">
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
              <stockContext.Provider value={stock}>
                <div className="row">
                  {shoes.map((item, index) => {
                    return (<ShoesCard key={index} shoes={item} index={index} />)
                    // return (<ShoesCard key={index} shoes={shoes[index]} />)
                  })}
                </div>
              </stockContext.Provider>

              <button className="btn btn-dark" onClick={() => {
                // 로딩 중이라는 UI 띄움 (state 가 true 일 때 표시하도록)
                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    // 로딩 중이라는 UI 안 보이게 처리 
                    console.log("성공", result.data)
                    setShoes([...shoes, ...result.data])
                  }).catch(() => {
                    // 로딩 중이라는 UI 안 보이게 처리 
                    console.log("실패")
                  })
              }}>More</button>
            </div>
          </Route>
          <Route path="/detail/:id">
            <stockContext.Provider value={stock}>
              <Detail shoes={shoes} stock={stock} setStock={setStock} />
            </stockContext.Provider>
          </Route>
        </Switch>
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
      <Test></Test>
    </div>
  )
}

function Test() {
  let stock = useContext(stockContext);
  return <p>{stock[0]}</p>
}




export default App;

