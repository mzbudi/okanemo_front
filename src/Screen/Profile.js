import React, { Component, Fragment } from 'react';
import { Container, Form } from 'react-bootstrap';
import Header from '../Components/Header';

class Profile extends Component {
  state = {
    userLoged: {},
  };

  componentDidMount() {
    const userLoged = localStorage.getItem('logedData');
    if (userLoged) {
      // let parsedData = JSON.parse(userLoged);
      this.setState({
        userLoged: JSON.parse(userLoged),
      });
    } else {
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container fluid>
          <div
            style={{
              minWidth: 300,
              width: 350,
              padding: 20,
              margin: '0 auto',
              marginTop: 80,
              borderRadius: 10,
            }}
            className="shadow"
          >
            <p
              style={{
                fontFamily: 'Segoe UI',
                fontSize: '20px',
                textAlign: 'center',
              }}
            >
              Profile
            </p>
            <Form>
              <Form.Group
                controlId="formBasicUsername"
                style={{ marginBottom: 20 }}
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  disabled
                  value={this.state.userLoged.name || ''}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                style={{ marginBottom: 20 }}
              >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  disabled
                  value={this.state.userLoged.username || ''}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                style={{ marginBottom: 20 }}
              >
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  disabled
                  value={this.state.userLoged.role || ''}
                />
              </Form.Group>
            </Form>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Profile;
