import React from "react";

function Goals(props){
    return(
        <div id="goals">
            <h3>What is your ideal weight goal?</h3>
            <label htmlFor="loose">
                <h5>Loose</h5>
                <input checked = {props.goal === "loose"} value={"loose"} onChange={event => props.handleChange(event)} id={"loose"} name={"goal"} type={"radio"}/>
            </label>
            <label htmlFor="equilibrium">
                <h5>Maintain</h5>
                <input checked = {props.goal === "equilibrium"} value = {"equilibrium"} onChange={event => props.handleChange(event)} id={"equilibrium"} name={"goal"} type={"radio"}/>
            </label>
            <label htmlFor="gain">
                <h5>Gain</h5>
                <input checked = {props.goal === "gain"} value={"gain"} onChange={event => props.handleChange(event)} id={"gain"} name={"goal"} type={"radio"}/>
            </label>
        </div>
    );
}

export default Goals;