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

import {addComment, fetchDishes, fetchPromotions, fetchLeaders, fetchComments} from './actionCreator.js';






class Main extends React.Component {
    constructor(props) {
        super(props);
        
      }
    componentDidMount(){
      this.props.dispatch(fetchDishes());
      this.props.dispatch(fetchPromotions());
      this.props.dispatch(fetchLeaders());
      this.props.dispatch(fetchComments());
    }
    
    render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            />
      );
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} />} />
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


export default withRouter(connect(mapStatetoProps)(Main));

