
I have been going threw https://scrimba.com/learn/learnreact but before that what really helped me understand the code was 
 https://scrimba.com/learn/introtoes6   This goes over ES6 
 covering template literals, destructuring objects and arrays. loops, spread operator arrow function import and export promises and so much we are learning now. 
 Coding along really helps alot. I didnt have time to do that with all of this but i learned and it stuck better with the parts I did. 

 https://www.youtube.com/watch?v=I2UBjN5ER4s&ab_channel=BrianDesign
 This youtub is packed with stuff we are doing and also goes over how to set it all up and use the router. This takes a while to get threw esp when looking up every section for full understanding. I am doing a code along to try to get the most out of it and to be able to set my page up using the cards. This will def help with setting up the components and how to link them to make it work. A couple parts I needed to dive in deeper to get why he set it up like he did but he gives a lot of information as you build the code to make it easer to know what to search for. I did find that he builds backwords then what I am use to for instance...when in the process of building the code he will set up things while he is there with that train of thought. For instance the button behavior before the button has been defined and shows that it will give you an error. This did help me.This showed me what I was forgeting. Its a lot of information but a good way to see what we have been learning get implamented in something thats waiting on us in the real world. 

 
 


I have this error that I am having trouble resolving. 

Failed to compile.

./src/App.js
Module not found: Can't resolve './components/Navbar' in '/Users/denahornsby/Desktop/react-webpage-2/src'

found that someones issue with this was that 

I toggled line 1 and 2 on NavBar.js seeing if the useState is an issue. 



found that someone had the issue and did this: npm just failed to install the react module for some reason.Try removing package-lock.json, run npm install and then npm start again. Please also share your package.json file.

i reinstalled npm and ran start again a couple times.

still :Failed to compile







-------------------------
<></>

shorter syntax for declaring fragments.
You can use <></> the same way you’d use any other element except that it doesn’t support keys or attributes.
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
-------------------------
useState line 2 in NavBar.js

useState = this.state in classes

Hooks and Function Components
function components in React look like this:

const Example = (props) => {
  // You can use Hooks here!
  return <div />
}
----------------------

function Example(props) {
  // You can use Hooks here!
  return <div />;
}

 known as “stateless components”. We now have ability to use React state from these, prefered name “function components”.

A HOOK DOES NOT WORK INSIDE A CLASS!!!
 what can use instead of state

If you write a function component and you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.
example:

import React, { useState } from 'react';
function Example() {
  // ...
}

more info on set up
https://reactjs.org/docs/hooks-state.html


--------------------
after the navBar container  div i tried control c to stop the app
and attempted to npm install react-router-dom
i then added the link to the navbar to get a nev bar icon. code snippet from 
Font Awesome
https://fontawesome.com/icons/angellist?style=brands
this is the one i tried. 

i used Link instead of a tag
DLH is an attempt to print by the pic
I have commented this link out for the moment perhaps that is my issue

--------------------
for the hamburger menu
<div className='menu-icon'>

now this will work as it is not a linking issue to the fontawsome site

----ok the error is finally cleared----
it was a syntax error all this time in NavBar
and a react pic and....the package.json
 lost about a day...Check double check syntex!!!. 

--------------------
next add the items in the navBar and the signup button
then layout your button. put it in the components file. 
add a true false for button style and sizes in the button 
components file
button.js and button.css added now

https://getbootstrap.com/docs/4.0/components/buttons/
what i used in the past to set up these buttons but he did so something different using the --
https://mdbootstrap.com/docs/react/components/buttons/

notes on -- :
-- this is a great layout of what -- and __ can do 
https://cssguidelin.es/#bem-like-naming
More Layers
If we were to add another Element—called, let’s say, .person__eye {}—to this .person {} component, we would not need to step through every layer of the DOM. That is to say, the correct notation would be .person__eye {}, and not .person__head__eye {}. Your classes do not reflect the full paper-trail of the DOM.

https://medium.com/fhinkel/the-curious-case-of-double-dashes-b5e7711698f

cute article somewhat informative but not what i was looking for but wanted to keep it, the article on top is the key one. 



























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.





