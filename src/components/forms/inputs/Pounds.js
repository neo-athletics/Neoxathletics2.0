import React from "react";

function Pounds(props){
    return(
        <div id="pounds">
            <h3>How many pounds will you like to {props.goal}?</h3>
            <label>
                <h5>1 pound</h5>
                <input value={"1"} checked={props.pounds === "1"} onChange={event => props.handleChange(event)} type={"radio"} id ={"one"} name = {"pounds"}/>
            </label>
            <label>
                <h5>2 pounds</h5>
                <input value={"2"} checked={props.pounds === "2"} onChange={event => props.handleChange(event)} type={"radio"} id ={"two"} name = {"pounds"}/>
            </label>
        </div>
    );
}

export default Pounds;