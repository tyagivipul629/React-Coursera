import React from 'react';
import {Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import {Jumbotron} from 'reactstrap';


function Header(){
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">My Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>My Restaurant</h1>
                       <p>We take inspiration from the World's best cuisines, and strive to serve you the best and fresh food which is breathtaking</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  
    }
export default Header;