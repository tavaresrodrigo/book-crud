import React, { Component } from "react";
import UserDataService from "../services/user.service";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class User extends Component {
  constructor(props) {
    super(props);
    this.username = ""
    this.password = ""
    this.state = {
      currentUser: {
        username: "",
        email: "",
        password: "",
        isAdmin: true,
        imagePath: ""
      },
      message: ""
    };
  }

connect () {
UserDataService.login(this.username, this.password).then((response) => { 
  console.log(response.data.id)
  console.log(response.data.password)
  cookies.set("id", response.data.id)
  cookies.set("password", response.data.password)
})
.catch((err) => {
  console.log("Authentication failed")
});


}

handleUsernameChange (event) {
  this.username = event.target.value 
}

handlePasswordChange (event) {
 this.password = event.target.value
}
  render() {
    const { currentUser } = this.state;

    return (
      <div>
        {currentUser ? (
          <div className="edit-form">
            <h4>User Login</h4>
            <form>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange.bind(this)} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange.bind(this)} 
                />
              </div>
              
            </form>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.connect.bind(this)}
            >
              Login
            </button>
          </div>
        ) :"" }
      </div>
    );
  }
}