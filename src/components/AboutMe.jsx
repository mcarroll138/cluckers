import React from "react";

function AboutMe() {
    const myStyledComponentStyles = {
        backgroundColor: '#ecf0f1',
        fontFamily: 'sans-serif',
        paddingTop: '150px',
        margin: '5',
        // display: 'flex',
        justifycontent: 'center',
        /* place-items: center; */
        // minwidth: '2%',
        // min-height: '100vh',
        // flexdirection: 'row',
        // flexwrap: 'wrap',
    }
    return (
        <div style={myStyledComponentStyles}>

            <h2>About Me:</h2>
            <h3>Respect thy peck... not no spring chicken, definetly know my way around the hen house. I work hard, I play hard. Live fast, die young.</h3>

        </div >
    );
}

export default AboutMe