import React from "react";
import PropTypes from "prop-types";

function Chicken(props){
    return (
        <React.Fragment>
            <p>{props.names}</p>
            <p>{props.cluck}</p>
            <p>{props.following}</p>
            <p>{props.followers}</p>
        </React.Fragment>
    );
}

Chicken.propTypes = {
    names: PropTypes.string,
    cluck: PropTypes.string,
    following: PropTypes.string,
    followers: PropTypes.string
};

export default Chicken;