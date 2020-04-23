import React, { Component, Fragment } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import ModalWrongPassword from '../Components/ModalWrongPassword';
import Header from '../Components/Header';

class ChangeData extends Component {
  state = {
    userData: {},
    errData: false,
    errMsg: '',
  };

  componentDidMount() {
    if (this.props.location.state && this.props.location.state !== undefined) {
      this.setState({
        userData: this.props.location.state.userData,
      });
    } else {
      this.props.history.push('home');
    }
  }

  closeData = () => {
    this.setState({
      errData: false,
    });
  };

  handleChangeData = (e) => {
    e.preventDefault();
    const { id, name, password } = this.state.userData;
    const body = {
      name,
      password,
      id,
    };

    const token = localStorage.getItem('token');

    const headers = {
      headers: { authorization: token },
    };
    axios
      .put(`${process.env.REACT_APP_API_HOST}/user/changedata`, body, headers)
      .then((res) => {
        this.props.history.goBack();
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
              Change Data
            </p>
            <Form>
              <Form.Group
                controlId="formBasicname"
                style={{ marginBottom: 20 }}
              >
                <Form.Control
                  placeholder="Name"
                  value={this.state.userData.name || ''}
                  onChange={(e) => {
                    this.setState({
                      userData: {
                        ...this.state.userData,
                        name: e.target.value,
                      },
                    });
                  }}
                  size="lg"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.userData.password || ''}
                  onChange={(e) => {
                    this.setState({
                      userData: {
                        ...this.state.userData,
                        password: e.target.value,
                      },
                    });
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
                  this.handleChangeData(e);
                }}
                size="lg"
              >
                Change Data
              </Button>
            </Form>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default ChangeData;
