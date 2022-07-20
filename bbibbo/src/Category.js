import './App.css';
import styled from "styled-components";
import { Button, Container, Navbar, Nav, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ignore = [
  "/", "/login", "/register"
]

function Category() {
  const { pathname } = useLocation();
  if (ignore.includes(pathname)) {
    return null;
  }

  else {
    return (
      <div className="App">
        <Navbar className='navbar_Bg'>
          <Container>
            <Navbar.Brand href="/introduction" className='nav_title'>몽글몽글</Navbar.Brand>
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
