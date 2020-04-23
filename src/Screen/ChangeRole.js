import React, { Component, Fragment } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';
import ModalWrongPassword from '../Components/ModalWrongPassword';
import Header from '../Components/Header';

class ChangeRole extends Component {
  state = {
    userData: {},
  };

  componentDidMount() {
    if (this.props.location.state.userData) {
      this.setState({
        userData: this.props.location.state.userData,
      });
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

  handleChangeRole = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const { id, role } = this.state.userData;
    const body = {
      id,
      role,
    };
    const headers = {
      headers: { authorization: token },
    };
    axios
      .put(`${process.env.REACT_APP_API_HOST}/user/changerole`, body, headers)
      .then((res) => {
        this.props.history.goBack();
      })
      .catch((err) => {
        // console.log(err.response);
        // this.setState({
        //   errMsg: err.response.data.data.msg,
        //   errData: true,
        // });
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
              Change{' '}
              {this.state.userData.name ? this.state.userData.name : null} Role
            </p>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select New Role</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.userData.role}
                  onChange={(e) => {
                    this.setState({
                      userData: {
                        ...this.state.userData,
                        role: e.target.value,
                      },
                    });
                  }}
                >
                  <option>Admin</option>
                  <option>User</option>
                </Form.Control>
              </Form.Group>

              <Button
                style={{ marginTop: 20 }}
                variant="primary"
                type="submit"
                block
                onClick={(e) => {
                  this.handleChangeRole(e);
                }}
                size="lg"
              >
                Change Role
              </Button>
            </Form>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default ChangeRole;
