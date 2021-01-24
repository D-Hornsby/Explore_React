import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
// above for navbar icon 
import './App.css';


function App () {
    return (

        <>
         <Router>
              <NavBar /> 
                <Switch>
                     <Route path='/' exact />
                 </Switch>
             </Router>
        </>


        
       
    );
}
//all for the nav icon so far

export default App;

//this fragment was for the icon but put the function back to see if  the issue is here
//i replaced the div with this in my attempt
//contains route pages an paths in the switch

//EXACT WOULD BE THE HOME COMPONET BUT IT WAS NOT CREATED YET...COULD BE IT?
//put it back again and cut the div out

        // <div className= 'App'>
        //     <NavBar />
        //</div>