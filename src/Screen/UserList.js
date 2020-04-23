import React, { Component, Fragment } from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import Header from '../Components/Header';
import axios from 'axios';
import ModalWrongPassword from '../Components/ModalWrongPassword';

class UserList extends Component {
  state = {
    role: '',
    logout: false,
    dataUser: [],
    logData: '',
    errMsg: '',
    errData: false,
  };

  requestUser = () => {
    const headers = {
      headers: { authorization: localStorage.getItem('token') },
    };
    axios
      .get(`${process.env.REACT_APP_API_HOST}/user/allUser`, headers)
      .then((res) => {
        this.setState({
          dataUser: res.data.data,
        });
      })
      .catch((err) => {
        this.setState({
          errMsg: err.response.data.data.msg,
          errData: true,
        });
      });
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const logData = localStorage.getItem('logedData');
    if (!token || !logData) {
      this.setState({
        logout: true,
        logData: logData,
      });
    } else {
      this.requestUser();
    }
  }

  closeData = () => {
    this.setState(
      {
        errData: false,
      },
      () => {
        this.props.history.goBack();
      }
    );
  };

  changeName = (e, item) => {
    this.props.history.push({
      pathname: '/changedata',
      state: { userData: item },
    });
  };

  changeRole = (e, item) => {
    this.props.history.push({
      pathname: '/changerole',
      state: { userData: item },
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <ModalWrongPassword
          open={this.state.errData}
          msg={this.state.errMsg}
          closeModal={this.closeData.bind(this)}
        />
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
            User List
          </p>
          <Table bordered hover style={{ marginTop: 30 }} className="shadow-sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Role</th>
                <th style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dataUser.length
                ? this.state.dataUser.map((item, index) => {
                    if (item.role !== 'Super') {
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>{item.role}</td>
                          <td style={{ textAlign: 'center' }}>
                            <Button
                              style={{ margin: 5 }}
                              onClick={(e) => {
                                this.changeName(e, item);
                              }}
                            >
                              Change Data
                            </Button>
                          </td>
                        </tr>
                      );
                    }
                  })
                : null}
            </tbody>
          </Table>
        </Container>
      </Fragment>
    );
  }
}

export default UserList;
