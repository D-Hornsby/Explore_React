//import React from 'react';
import React, { useState, useEffect} from 'react';
import {Button} from './Button';
import {Link, useParams} from 'react-router-dom';
import './Navbar.css';
// i have Navbar in my css instead of NavBar
//switched around line 2 to see if order mattered. 
// ln 2 for the icon on sidebar
//setting up the handleClick in the div for menu-icon
//to go with the setClick under function NavBar to toggle the click from true to false
//this really just takes you back and forth, true and false from hamburger to bars
//just reversing the state

function NavBar() {
  
  //were going to set stats now to update the state using click and change it
  const [click, setClick] = useState(false);
  const [button, setButton]= useState(true);

  const handleClick = () => setClick (!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 900){setButton(false);} 
    else {setButton(true);}
  };

  useEffect(() =>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (
         <>
           <nav className='navbar'>
             <div className='navbar-container'>
                 <Link to ='/' className='navbar-logo' onClick={closeMobileMenu}>
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

                  <li>
                    <Link to= '/sign-up' className= 'nav-links-mobile' onClick={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li>
                  </ul>
                  {button && <Button buttonStyle= 'btn--outline'>Sign Up</Button>}

             </div>
        
           </nav>

         </>
    );
}


export default NavBar;


//i could not fugure our what was going on but i was missing my import {Button}
//and my last line here on 82 for export defaule NavBar

//ul className click line is so when your on moble if you click it the nav menu to dissapear
//export default NavBar;
// hamburger menu uses fontawsome also so may have to go back 
//creating state with click to switch navBar from hamburger to bars
//will toggle
//defining closeMobleMenu on line under const [click, setClick] then create the function
//for closeMobleMenu and set to false
//copied li for the second and third cataglory named services and products and changed links to match
//for the last copy past change to a sign up that will be a button dissapears will have a diff class name only shows on moble
//add a new componet file for button

//adding styled button under ul tag to implement using && so will just if button is true it 
//line 53 if button is true (&&) return the button componet. passing in the child signup
//creating buttonStyle outline

//it will not stay in defalt and switch between the primary and the outlin
//need to create some states...add at the top of the function. 

//starting line 19  if else is for smaller screens. the button will dissapear on smaller screens. 

//the hook
//useEffect added to line 1 and 28-30, the button on the nav bar would randomly show up 
//useEffect says to render 1 time then not show up all weard when refreshed on smaller screens. 
//this is passed into an empty array

//closeMobileMenu added to line 38 so when the logo is clicked it will close to home page