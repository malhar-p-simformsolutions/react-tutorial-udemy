import React from "react";
//import Radium from 'radium';
import styled from 'styled-components';
//import './Person.css';

const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #12e432;
padding: 16px;
text-align: center;

@media (min-width: 500px) {
    width: 450px;
}

`;


const person = ( props ) => {
   // const style = {
    //    '@media (min-width: 500px)': {
    //        width: '450px'
    //    }
   // };
    return (
        //<div className="Person">
        <StyledDiv>
            <p onClick={props.click1}>I am {props.name} and I am {props.age} years old..!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.value}></input>
            </StyledDiv>
    )

};

export default person;