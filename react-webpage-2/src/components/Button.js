//this is the button for the signup but can be used anywhere
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { renderIntoDocument } from 'react-dom/test-utils';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle
    :STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES [0];

    return (
        <Link to= '/sign-up' className= 'btn-mobile'>
            <button
            className ={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick= {onClick}
            type= {type}
            >
                {children}
            </button>
        </Link>
    );
};

//for this button there is an array so if said button has a button style created
//then keep that sytle but if not true pick button styles the first in the array
//making 2 buttone. one with just an outline and one solid to call primary. 
//css classes

//if you dont have classes aplied to the button it will by defalt pick the apply styles 1st position
//repeting for size like in style
//whatever you put in the button gets rendered. click inside the carret and add class
//line 29 was covered in ES6 videos...add link in README
//covers backticks and ${} ...using class name to update

// -- he used this to target time around 30:00
//the use of predefined buttons. Links in README

//line 13 and 31...?

//now to styling!!!