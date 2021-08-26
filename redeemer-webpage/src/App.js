import './App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className="navigation-bar">
      <Navbar  expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Verbum Domini Manet in Aeternum</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Who We Are</Nav.Link>
              <Nav.Link href="#pricing">What We Believe</Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Who We are</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">What We Believe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Our Sister Church</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Container fluid>
        <h1>Hello</h1>
        <div class="fb-page" data-href="https://www.facebook.com/Redeemer.Bagley" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Redeemer.Bagley" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Redeemer.Bagley">Redeemer Lutheran Church</a></blockquote></div>
      </Container>
    </div>
  );
}

export default App;
