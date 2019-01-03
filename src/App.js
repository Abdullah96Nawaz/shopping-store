import React, { Component } from 'react';
import Products from './components/Products';
import Nav from './components/Navbar';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {LoggedIn} from './actions/LoginSignup';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Checkout from './components/CheckoutContent/Checkout';
import {ProtectedRoute} from './components/ProtectedRoute/ProtectedRoute';
import Check from './components/Check'

class App extends Component {

  componentDidMount(){
    console.log('AAAAAAAAAA',this.props.user);
    if(this.props.user){
      this.props.dispatch(LoggedIn(this.props.user));
    }
    
  }
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Products}/>
            <ProtectedRoute exact path='/checkout' component={Checkout} user={this.props.user}/>
            <Route exact path='/check' component={Check}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
      user:state.user
  };
}
export default connect(mapStateToProps)(App);
