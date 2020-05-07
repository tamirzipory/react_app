import React, { Component } from "react";
import {
  Link,
  NavLink,
  HashRouter,
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "./LoginPage";
import Profile_page from "./Profile_page";
import English_game from "./English_game";
import Shop from "./shop";
class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    componentDidMount() {
      fetch('/api/users/currentUser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({user: data.user})
          if (!data.user) {
            window.location.href = '/login'
          }
        });
    }

    logout() {
      fetch('/api/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(data => {
          console.log(data)
          window.location.href = '/'
        });
    }

    render() {
		
		console.log(this.state.user)
      return (
	  
	   <HashRouter>
        <div>
       

	   <h2>home</h2>
		  
		  
		  <ul className="Profile_page">
            <li><NavLink to="/Profile_page">Profile_page</NavLink></li>
			</ul>
			<ul className="English_game">
            <li><NavLink to="/English_game">English_game</NavLink></li>
			</ul>
			<ul className="shop">
            <li><NavLink to="/shop">Shop</NavLink></li>
			</ul>
			
			 <div className="content">
			 <Route path="/Profile_page" render={() => < Profile_page user={this.state.user} />}/>
			 <Route path="/English_game" component={English_game}/>
			 <Route path="/shop" component={Shop}/>
			 </div>
			
		  

          {!this.state.user && <Link to="/login">Login</Link>}
          {this.state.user && <button onClick={this.logout}>Logout</button>}

        </div>
		</HashRouter>
		
      );
    }
  }
   
  export default HomePage;