import React, { Component } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
// import { FiMail } from 'react-icons/fi';
// import { FaLock } from 'react-icons/fa';
// import ModalErrorData from '../ModalErrorData';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errData: false,
    errMsg: '',
  };

  componentDidMount() {
    // if (Object.keys(this.props.auth.data).length) {
    //   this.props.history.push('/')
    // }
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
    // e.preventDefault();
    // const { email, password } = this.state;
    // const body = {
    //   email,
    //   password,
    // };
    // if (!email || !password) {
    //   this.setState({
    //     errData: true,
    //     errMsg : 'Data Harus Diisi Lengkap'
    //   });
    // } else {
    //   this.props
    //     .dispatch(requestLogin(body))
    //     .then(({ value }) => {
    //       if (value.data.hospital_status === true) {
    //         this.props.history.push('hospital');
    //       } else {
    //         this.props.history.push('homeuser');
    //       }
    //     })
    //     .catch(({response}) => {
    //       this.setState({
    //         errData: true,
    //         errMsg : 'Email / Password Salah'
    //       });
    //     });
    // }
  };

  render() {
    return (
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
            Login
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail" style={{ marginBottom: 20 }}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  this.handleChangeText(e, 'email');
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
              variant="secondary"
              type="submit"
              block
              size="lg"
              onClick={() => {
                this.props.history.push('/signup');
              }}
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default SignIn;
