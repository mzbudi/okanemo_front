import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

const Header = () => {
  const [logout, setLogout] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const logData = localStorage.getItem('logedData');
    if (!token || !logData) {
      setLogout(true);
    } else {
      const logDataParsed = JSON.parse(logData);
      setName(logDataParsed.name);
    }
  }, []);

  return (
    <div className="shadow">
      {logout ? <Redirect to="/" /> : null}
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: 'rgba(255,255,255,255)' }}
        variant="light"
      >
        <Navbar.Brand
          style={{ color: '#bf0a01', fontWeight: 'bold', fontSize: 20 }}
        >
          <Link to="/">Okanemo Test</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>

          <Nav>
            {name ? (
              <Fragment>
                <Nav.Item>
                  <Link to="#">
                    <Button size="lg" variant="custom">
                      Halo , {name}
                    </Button>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="#">
                    <Button
                      size="lg"
                      variant="custom"
                      onClick={(e) => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('logedData');
                        setName('');
                        setLogout(true);
                      }}
                    >
                      Logout
                    </Button>
                  </Link>
                </Nav.Item>
              </Fragment>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
