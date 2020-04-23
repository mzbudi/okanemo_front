import React, { Component, Fragment } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';
import ModalWrongPassword from '../Components/ModalWrongPassword';
import Header from '../Components/Header';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    errData: false,
    errMsg: '',
  };

  componentDidMount() {
    const userLoged = localStorage.getItem('token');
    if (userLoged) {
      this.props.history.push('/home');
    }
  }

  handleChangeText = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  closeData = () => {
    this.setState({
      errData: false,
    });
  };

  handleSignIn = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const body = {
      username,
      password,
    };
    axios
      .post(`${process.env.REACT_APP_API_HOST}/auth/login`, qs.stringify(body))
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('logedData', JSON.stringify(res.data.data));
        this.props.history.push('/home');
      })
      .catch((err) => {
        this.setState({
          errMsg: err.response.data.data.msg,
          errData: true,
        });
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Container fluid>
          <ModalWrongPassword
            open={this.state.errData}
            msg={this.state.errMsg}
            closeModal={this.closeData.bind(this)}
          />
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
              Login
            </p>
            <Form>
              <Form.Group
                controlId="formBasicUsername"
                style={{ marginBottom: 20 }}
              >
                <Form.Control
                  type="username"
                  placeholder="username"
                  onChange={(e) => {
                    this.handleChangeText(e, 'username');
                  }}
                  size="lg"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    this.handleChangeText(e, 'password');
                  }}
                  size="lg"
                />
              </Form.Group>

              <Button
                style={{ marginTop: 20 }}
                variant="primary"
                type="submit"
                block
                onClick={(e) => {
                  this.handleSignIn(e);
                }}
                size="lg"
              >
                Login
              </Button>
            </Form>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default SignIn;
