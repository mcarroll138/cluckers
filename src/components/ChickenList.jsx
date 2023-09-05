import React from "react";
import Chicken from "./chicken";

const chickenList = [
    {
        names: "Henny Penny",
        cluck: "Why did the chicken cross the playground? To get to the other slide",
        following: "Chiqi Feathers, BigDaddy Rooster, Margaret Fluff",
        followers: "Chiqi Feathers, BigDaddy Rooster, Margaret Fluff"
    }
];

function ChickenList(){
    return (
        <React.Fragment>
            <hr/>
            {chickenList.map((chicken, index) =>
            <Chicken names={chicken.names}
            key={index}/>
            )}
        </React.Fragment>
    );
}

export default ChickenList;
