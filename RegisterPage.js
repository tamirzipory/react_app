import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {}
      }
    }

    register() {
      console.log('register',this.state.form)
      fetch('/api/users/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      }
      )
      .then(data => {
        console.log('User created. redirect to login.')
        window.location.href = '/login'
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
              <h1 class="text-center mb-3">
                <i class="fas fa-user-plus"></i> Register
              </h1>
              <div>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    class="form-control"
                    placeholder="Enter Name"
                    value={this.state.name} 
                    onChange={(evt) => this.handleValueChange(evt, 'name')}
                  />
                </div>
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
                    placeholder="Create Password"
                    value={this.state.password} 
                    onChange={(evt) => this.handleValueChange(evt, 'password')}
                  />
                </div>
                <div class="form-group">
                  <label for="password2">Confirm Password</label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    class="form-control"
                    placeholder="Confirm Password"
                    value={this.state.password2} 
                    onChange={(evt) => this.handleValueChange(evt, 'password2')}
                  />
                </div>
                <button class="btn btn-primary btn-block" onClick={() => this.register()}>
                  Register
                </button>
              </div>
              <p class="lead mt-4">Have An Account? <Link to="/login">login</Link></p>
            </div>
          </div>
        </div>
      );
    }
  }
   
  export default LoginPage;