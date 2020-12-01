import React from 'react'

export default function Weight(props) {
    return (
        <div class="weight">
            <h3>Weight</h3>
        <label for="weight">

          <input
            id="weight"
            type="number"
            placeholder="weight"
            name="weight"
            min={20}
            value = {props.weight}
            onChange={(event) => props.handleChange(event)}
            step = {1}
            required
          />
        </label>

        <label for="kg">
          <input id="kg" type="radio" value="kg" name="weightType" checked={props.weightType === 'kg'} onChange={(event) => props.handleChange(event)} />
          <span class="type">kg</span>
        </label>

        <label for="lbs">
          <input id="lbs" type="radio" value="lbs" name="weightType" checked={props.weightType === 'lbs'} onChange={(event) => props.handleChange(event)}/>
          <span class="type">lb</span>
        </label>
      </div>
    );
}
