I have this error that I am having trouble resolving. 

Failed to compile.

./src/App.js
Module not found: Can't resolve './components/Navbar' in '/Users/denahornsby/Desktop/react-webpage-2/src'

found that someones issue with this was that 

I toggled line 1 and 2 on NavBar.js seeing if the useState is an issue. 

I have ../ , ./ , and used nothing for linking the working directory. 
Ive doubel checked that I did it correctly

found that someone had the issue die to this: npm just failed to install the react module for some reason.Try removing package-lock.json, run npm install and then npm start again. Please also share your package.json file.

i reinstalled npm and ran start again a couple times. i am now on localhost:3002

still :Failed to compile

I changed the function into a class and tryed it another way. did not make a difference so i changed it back to a function. 









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
-------------

function Example(props) {
  // You can use Hooks here!
  return <div />;
}

 known as “stateless components”. We now have ability to use React state from these, prefered name “function components”.

A HOOK DOES NOT WORK INSIDE A CLASS DENA!!!
can use instead of state

If you write a function component and you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.
example:

import React, { useState } from 'react';
function Example() {
  // ...
}

more info on set up
https://reactjs.org/docs/hooks-state.html

-----
after the navBar container  div i tryed control c to stop the app
and atempted to npm install react-router-dom
i then added the link to the navbar to get a nev bar icon. code snipit from 
Font Awesome
https://fontawesome.com/icons/angellist?style=brands
this is the one i tried. 

i used Link instead of a tag
DLH is an atempt to print by the pic
I have commented this link out for the moment perhaps that is my issue

--------------------
for the hamburger menu
<div className='menu-icon'>

now this will work as it is not a linking issue to the fontawsome site

----ok the error is finaly cleared----
it was a syntax error all this time in NavBar
and a react pic and....the package.json
oh my gosh. i lost about a day on that one. 










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
