import './App.css';

import { Button, Container, Navbar, Nav } from 'react-bootstrap';

const ignore = [
  "","login","register"
]

function Category() {

  if (ignore.includes(document.location.href.split("/")[3])) {
    return <></>
  }

  else {
    return (
      <div className="App">
          <Navbar className='navbar_Bg'>
              <Container>
              <Navbar.Brand href="/list">몽글몽글</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/introduction">몽글몽글안내</Nav.Link>
                  <Nav.Link href="/write">청원하기</Nav.Link>
                  <Nav.Link href="/list">청원글</Nav.Link>
              </Nav>
              </Container>
          </Navbar>
      </div>
    );
  }

}


export default Category;
