import React from 'react';

import Menu from './MenuComponent.js';

import dishes from './dishes.js';

import DishDetail from './DishdetailComponent.js';

import Header from './Header.js';

import Footer from './Footer.js';

import {Switch, Route, Redirect} from 'react-router-dom';

import Home from './Home.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishes
        };
        
      }
      
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

