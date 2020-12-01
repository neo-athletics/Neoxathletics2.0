import React from 'react'

export default function HeightandAge(props) {
    return (
        <div class="heightage">

            <h3>Height</h3>
            <label htmlFor="feet">
              <input
                id="feet"
                type="number"
                placeholder="feet"
                name="feet"
                value = {props.feet}
                min={1}
                onChange={event => props.handleChange(event)}
                required
              />
            </label>
            <label htmlFor="inches">
                <input
                    id="inches"
                    type="number"
                    placeholder="inches"
                    name="inches"
                    min={0}
                    value={props.inches}
                    onChange={event => props.handleChange(event)}
                    required
                />
            </label>

            <label htmlFor="age">
              <h3>Age</h3>
              <input id="age" type="number" min={1} placeholder="age" name="age" value = {props.age} onChange={event => props.handleChange(event)} required />
            </label>
        </div>
    )
}
