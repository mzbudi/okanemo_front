import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../Components/Header';

class Home extends Component {
  state = {
    role: '',
    logout: false,
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const logData = localStorage.getItem('logedData');
    if (!token || !logData) {
      this.setState({
        logout: true,
      });
    } else {
      const logDataParsed = JSON.parse(logData);
      this.setState({
        role: logDataParsed.role,
      });
    }
  }

  render() {
    const { role } = this.state;
    return (
      <Fragment>
        <Header />
        <Container>
          <p
            style={{
              textAlign: 'center',
              marginTop: 30,
              fontWeight: 'bold',
              fontFamily: 'Sagoe UI',
              fontSize: 20,
            }}
          >
            Home
          </p>
          <Row>
            {role === 'Super' ? (
              <Col>
                <Button
                  variant="primary"
                  block
                  onClick={(e) => {
                    this.props.history.push('/dashboard');
                  }}
                >
                  DashBoard
                </Button>
              </Col>
            ) : null}

            {role === 'Super' || role === 'Admin' ? (
              <Col>
                <Button
                  variant="primary"
                  block
                  onClick={() => {
                    this.props.history.push('/userlist');
                  }}
                >
                  UserList
                </Button>
              </Col>
            ) : null}

            <Col>
              <Button
                variant="primary"
                block
                onClick={(e) => {
                  this.props.history.push('profile');
                }}
              >
                Profile
              </Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
