import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

function MyNavBar({ currUser, logOutHandler, addHendler }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="nav-link" to="/">BIG FISH!</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              {currUser.id ? currUser.name : ''}
            </NavLink>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <Nav className="me-auto">
              {currUser.id
                ? (
                  <Nav className="pipe-separate mgL t-light-green left">
                    <Button className="nav-link" onClick={logOutHandler} variant="link">
                      Выйти
                    </Button>
                  </Nav>
                )
                : (
                  <>
                    <Nav className="pipe-separate t-light-green left"><NavLink className="nav-link" to="/auth/registration">Регистрация</NavLink></Nav>
                    <Nav className="pipe-separate t-light-green left"><NavLink className="nav-link" to="/auth/authorization">Авторизация</NavLink></Nav>
                  </>
                )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
