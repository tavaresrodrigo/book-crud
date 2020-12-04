import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cookies from 'universal-cookie';
import AddBook from "./components/add-book.component";
import Book from "./components/book.component";
import BookList from "./components/books-list.component";
import User from './components/user.component'
import UserList from './components/user-list.component'
import AddUser from './components/add-user.component'
import Logout from './components/logout.component'
import Login from './components/login.component'
const cookies = new Cookies();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  componentDidMount() {
    this.setState({
      loggedIn: cookies.get('password') !== '' && cookies.get('id') !== ''
    })
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousState.loggedIn !== this.state.loggedIn) {
      console.log('Update:', cookies.get('password') !== '' && cookies.get('id') !== '')
        this.setState({
          loggedIn: cookies.get('password') !== '' && cookies.get('id') !== ''
        })
    }
  }
  render() {
    return (
      <div>
        {this.state.loggedIn && 
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/books"} className="navbar-brand">
            BookLibrary WebApp
          </Link>
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-user"} className="nav-link">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/books"} className="nav-link">
                My Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Book
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/logout"} className="nav-link">
                Logout
              </Link>
            </li>
          </div>
        </nav>
  }

        <div className="container mt-3">
          <Switch>
            <Route exact path="/books" component={BookList} />
            <Route exact path="/add" component={AddBook} />
            <Route path="/books/:id" component={Book} /> 
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={UserList} />
            <Route path="/add-user" component={AddUser} />
            <Route path="/logout" component={Logout} />
            <Route path={["/","/login"]} component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;