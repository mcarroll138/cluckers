import React from "react";
import henny from "./../img/henny.jpeg";
function ChickenProfile() {
    const myStyledComponentStyles = {
        backgroundColor: '#ecf0f1',
        fontFamily: 'sans-serif',
        paddingTop: '150px',
    }
    return (
        <React.Fragment style={myStyledComponentStyles}>
            <img src={henny} />
            <h2><em>Sally B Mild</em></h2>
            <p>Respect thy peck...</p>
            <th>Following: 143 |</th>
            <th>Followers: 1.3k</th>
        </React.Fragment >
    );
}

export default ChickenProfile