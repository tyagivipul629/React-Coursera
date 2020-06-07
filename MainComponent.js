import React from 'react';

import Menu from './MenuComponent.js';

import dishes from './dishes.js';

import DishDetail from './DishdetailComponent.js';

import Header from './Header.js';

import Footer from './Footer.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishes,
            selectedDish: null
        };
        this.selectDish=this.selectDish.bind(this);
      }
    
      selectDish(dishId){
        this.setState({ selectedDish: dishId});
      }
      
  render() {
    return (
      <div className="App">
        <Header />
        <Menu dishes={this.state.dishes} onClick={this.selectDish} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        
        <Footer />
      </div>
    );
  }
}

export default Main;

