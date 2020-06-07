import React from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './MenuComponent.js';

import dishes from './dishes.js';

import DishDetail from './DishdetailComponent.js';

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={this.selectDish} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;

