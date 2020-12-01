import React from 'react'

export default function ActivityLevel(props) {
    return (
        <div class="activity">
        <label for="drop">
          <h3>Activity Level</h3>
        </label>

        <div class="wrapperDown">
          <select id="drop" name="activity" value = {props.activity} onChange={event => props.handleChange(event)} >
            <option value="sedentary">
              sedentary individual
            </option>
            <option value="physically">physically active</option>
            <option value="moderate">moderate exercise</option>
            <option value="active">active</option>
            <option value="vigorous">vigorous exercise</option>
          </select>
          <span id="down">
            <i class="fas fa-sort-down"></i>
          </span>
        </div>
      </div>
    )
}
