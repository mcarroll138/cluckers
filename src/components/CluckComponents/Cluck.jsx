// import React from "react";
import PropTypes from 'prop-types'
import ClucksButton from '../ClucksButton';

function Cluck(props) {
    // Define a CSS style object for the box
    const boxStyle = {
        border: '1px solid #ccc', // Border style
        padding: '10px', // Padding around the content
        marginBottom: '10px', // Margin between each box
    };

    return (
        <div style={boxStyle}>
            <h2>{props.name} &#128020;:</h2>
            <h3><em>{props.cluckText}</em></h3>
            <ClucksButton /> {props.id} &#x2764;&#xfe0f;
        </div>
    );
}

Cluck.propTypes = {
    name: PropTypes.string.isRequired,
    cluckText: PropTypes.string.isRequired
};

export default Cluck;


