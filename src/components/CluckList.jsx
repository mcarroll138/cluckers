import React from "react";
import Chicken from "./chicken";

const cluckPost = [
    {
        names: "Henny Penny",
        cluck: "Why did the chicken cross the playground? To get to the other slide"

    },
    {
        names: "Notta Duck",
        cluck: "And another thing about those damn ducks...."
    }
];

function CluckPost() {
    return (
        <React.Fragment>
            <textarea />
            <br />
            <button>Cluck It!</button>
            <hr />
            {cluckPost.map((chicken, index) =>
                <Chicken names={chicken.names}
                    cluck={chicken.cluck}
                    key={index} />
            )}
        </React.Fragment>
    );
}

export default CluckPost;
