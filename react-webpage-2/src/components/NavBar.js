//import React from 'react';
import React, {useState} from 'react'
import {Link} from 'react-router-dom';
// ln 2 for the icon on sidebar
//setting up the handleClick in the div for menu-icon
//to go with the setClick under function NavBar to toggle the click from true to false
//this really just takes you back and forth, true and false from hamburger to bars
//just reversing the state

function NavBar() {
  
  //were going to set stats now to update the state using click and change it
  const [click, setClick] = useState(false);
  const handleClick = () => setClick (!click);
  const closeMobileMenu = () => setClick(false);

    return (
         <>
           <nav className="navbar">
             <div className="navbar-container">
                 <Link to ="/" className="navbar-logo">
                 DLH< i className="fab fa-angellist"></i>
                 </Link> 
                <div className='menu-icon' onClick= {handleClick}>
                  <i className= {click ? 'fas fa-times' : 'fas fa-bars'}/>

                </div>

                <ul className = { click ? 'nav-menu active' : 'nav-menu'}>
                  <li className= 'nav-item'>
                    <Link to= '/' className= 'nav-links' onClick={closeMobileMenu}>
                      HOME
                    </Link>
                  </li>
                  <li className= 'nav-item'>
                    <Link to= '/services' className= 'nav-links' onClick={closeMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li className= 'nav-item'>
                    <Link to= '/products' className= 'nav-links' onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>
                  <li className= 'nav-item'>
                    <Link to= '/sign-up' className= 'nav-links-mobile' onClick={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li>
                  </ul>

             </div>
        
           </nav>

         </>
    )
}
//ul className click line is so when your on moble if you click it the nav menu to dissapear
export default NavBar;
// hamburger menu uses fontawsome also so may have to go back 
//creating state with click to switch navBar from hamburger to bars
//will toggle
//defining closeMobleMenu on line under const [click, setClick] then create the function
//for closeMobleMenu and set to false
//copied li for the second and third cataglory named services and products and changed links to match
//for the last copy past change to a sign up that will be a button dissapears will have a diff class name only shows on moble
//add a new componet file for button