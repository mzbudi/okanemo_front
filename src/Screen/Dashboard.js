import React, { Component, Fragment } from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import Header from '../Components/Header';
import axios from 'axios';

class Dashboard extends Component {
  state = {
    role: '',
    logout: false,
    dataUser: [],
  };

  requestUser = () => {
    const headers = {
      headers: { authorization: localStorage.getItem('token') },
    };
    axios
      .get(`${process.env.REACT_APP_API_HOST}/auth/role`, headers)
      .then((res) => {
        this.setState(
          {
            dataUser: res.data.data,
          },
          () => {
            console.log(this.state.dataUser);
          }
        );
      })
      .catch(console.log);
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const logData = localStorage.getItem('logedData');
    if (!token || !logData) {
      this.setState({
        logout: true,
      });
    } else {
      this.requestUser();
    }
  }

  changeName = () => {
    this.props.history.push('changename');
  };

  changeRole = () => {
    this.props.history.push('changerole');
  };

  render() {
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
            Dashboard
          </p>
          <Table bordered hover style={{ marginTop: 30 }} className="shadow-sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Role</th>
                <th>Action</th>
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
                          <td>
                            <Button
                              style={{ margin: 5 }}
                              onClick={(e) => {
                                this.changeName();
                              }}
                            >
                              Change Name
                            </Button>
                            <Button
                              style={{ margin: 5 }}
                              onClick={(e) => {
                                this.changeRole();
                              }}
                            >
                              Change Role
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

export default Dashboard;
