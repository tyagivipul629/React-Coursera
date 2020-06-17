import React from 'react';

import Menu from './MenuComponent.js';

import DishDetail from './DishdetailComponent.js';

import Header from './Header.js';

import Footer from './Footer.js';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Home from './Home.js';

import Contact from './ContactComponent.js';

import {connect} from 'react-redux';

import About from './AboutComponent.js';

import {addComment} from './actionCreator.js';


class Main extends React.Component {
    constructor(props) {
        super(props);
        
      }
  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment}/>
      );
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />} />
          <Route exact path='/contactus' component={Contact} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/aboutus' component={()=><About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStatetoProps=(state)=>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Main));

