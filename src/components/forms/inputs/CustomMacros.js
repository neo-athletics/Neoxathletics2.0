import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function CustomMacros(props){
    return(
        <>
        <div id="customMacros">
        <h3>Custom Macros</h3>
        <p className={"note"}>if you will like to adjust your macro nutrient percentage, you may do so by filling in the provided inputs</p>

        <label htmlFor={"carbohydrates"}>
            <h5>Carbohydrates</h5> <br/>
        <input name={"carbohydrates"} step ={1} value = {props.carbohydrates} placeholder={"0%"} type={"number"} onChange={(event => props.handleChange(event))}/>
        </label>

        <label htmlFor={"protein"}>
            <h5>Protein</h5><br/>
        <input name={"protein"} step ={1} value={props.protein} placeholder={"0%"} type={"number"} onChange={(event => props.handleChange(event))}/>
        </label>

        <label htmlFor={"fats"}>
            <h5>Fats</h5><br/>
        <input name={"fats"} step ={1} value={props.fats} placeholder={"0%"} type={"number"} onChange={(event => props.handleChange(event))}/>
        </label>

        {parseInt(props.total) > 0 && <p>{props.total}% remaining</p>}
        {parseInt(props.total) === 0 && <p>Complete <FontAwesomeIcon icon={faCheck} color={"green"} /> </p>}
        {parseInt(props.total) < 0 && <p>you are over {Math.abs(props.total)}%</p>}
        </div>
        </>
    );
}

export default CustomMacros;