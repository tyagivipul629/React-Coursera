import React from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './MenuComponent.js';

import dishes from './dishes.js';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
          dish: dishes
      };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      <Menu dishes={this.state.dish} />
      </div>
    );
  }
}

export default App;

