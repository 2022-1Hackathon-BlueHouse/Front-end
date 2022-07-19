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
              <Navbar.Brand href="/list" className='nav_title'>몽글몽글</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/introduction">몽글몽글안내</Nav.Link>
                  <Nav.Link href="/write">몽글몽글하기</Nav.Link>
                  <Nav.Link href="/list">몽글몽글보기</Nav.Link>
                  <Nav.Link className='logout' href="/login">로그아웃</Nav.Link>
              </Nav>
              </Container>
          </Navbar>
      </div>
    );
  }

}


export default Category;
