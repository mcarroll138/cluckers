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
            <h1><em>Sally B Mild</em></h1>
            
            <th>&#128020; Following: 143 |</th>
            <th>Followers: 1.3k&#128020;</th>
        </React.Fragment >
    );
}

export default ChickenProfile