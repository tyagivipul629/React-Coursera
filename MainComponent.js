import React from 'react';

import Menu from './MenuComponent.js';

import dishes from './dishes.js';

import DishDetail from './DishdetailComponent.js';

import Header from './Header.js';

import Footer from './Footer.js';

import {Switch, Route, Redirect} from 'react-router-dom';

import Home from './Home.js';

import Contact from './ContactComponent.js';

import comments from './comments.js';

import leaders from './leaders.js';

import promotions from './promotions.js';

import About from './AboutComponent.js';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishes,
            comments: comments,
            leaders: leaders,
            promotions: promotions
        };
        
      }
  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
          <Route exact path='/contactus' component={Contact} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/aboutus' component={()=><About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

