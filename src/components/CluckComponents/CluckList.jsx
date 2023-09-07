import React from "react";
import Cluck from "./Cluck";
import PropTypes from "prop-types";

// const mainCluckList = [
//     {
//         name: "Notta Duck",
//         cluckText: "And another thing",
//         id: '1b'
//     },
//     {
//         name: "Henny Penny",
//         cluckText: "Why did the chicken cross the playground? To get to the other slide",
//         id: '2c'
//     }
// ];

function CluckList(props) {
    return (
        <React.Fragment>
            <h1>Recent Clucks:</h1>
            <hr/>
            {props.cluckList.map((cluck, index) =>           
                <Cluck name={cluck.cluckName}
                    cluckText={cluck.cluckText}
                    id={cluck.id}
                    key={index} />
            )}
        </React.Fragment>
    );
}

CluckList.propTypes = {
    cluckList: PropTypes.array
};

export default CluckList;
