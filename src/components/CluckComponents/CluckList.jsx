import React from "react";
import Cluck from "./Cluck";

const mainCluckList = [
    {
        name: "Notta Duck",
        cluckText: "And another thing",
        id: '1b'
    },
    {
        name: "Henny Penny",
        cluckText: "Why did the chicken cross the playground? To get to the other slide",
        id: '2c'
    }
];

function CluckList() {
    return (
        <React.Fragment>
            {mainCluckList.map((cluck, index) =>
                <Cluck name={cluck.name}
                    cluckText={cluck.cluckText}
                    id={cluck.id}
                    key={index} />
            )}
        </React.Fragment>
    );
}

export default CluckList;
