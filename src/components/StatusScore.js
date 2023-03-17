import React from "react";

function StatusScore (props) {

    return(
        <div id="statusScore">
            <h2>Status</h2>
            <span>Moves : {props.moves}</span>
            <span>Rank : {props.rank}</span>
        </div>
    )

}

export default StatusScore;