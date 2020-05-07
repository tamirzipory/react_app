import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";

class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {}
      }
    }

    login() {
      fetch('/api/users/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(this.state.form)})
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          window.location.href = '/'
        }
      });
    }

    handleValueChange(evt, fieldName) {
      this.state.form[fieldName] = evt.target.value
    }

    render() {
      return (
        <div class="row mt-5">
                <div class="col-md-6 m-auto">
                  <div class="card card-body">
                    <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>Login</h1>
                    <form>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="form-control"
                          placeholder="Enter Email"
                          value={this.state.email} 
                          onChange={(evt) => this.handleValueChange(evt, 'email')}
                        />
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class="form-control"
                          placeholder="Enter Password"
                          value={this.state.password} 
                          onChange={(evt) => this.handleValueChange(evt, 'password')}
                        />
                      </div>
                    </form>
                    <button class="btn btn-primary btn-block" onClick={() => this.login()}>Login</button>
  
                    <p class="lead mt-4">
                      No Account? <Link to="/register">register</Link>
                    </p>
                    <p>
                      <Link to="/">home</Link>
                    </p>
                  </div>
                </div>
              </div>
      );
    }
  }
   
  export default LoginPage;