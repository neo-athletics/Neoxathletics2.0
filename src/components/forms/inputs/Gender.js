import React from 'react'

export default function Gender(props) {
    return (
        <div className="gender">
        <h3>Gender</h3>

        <label htmlFor={"male"} >
          <input id="male" type="radio" name="gender" value="male" checked={props.gender === 'male'} onChange={(event) => props.handleChange(event)}/>
            <span>Male</span>
        </label>

        <label htmlFor={"female"} >
          <input id="female" type="radio" name="gender" value="female"  checked={props.gender === 'female'} onChange={(event) => props.handleChange(event)} />
            <span>Female</span>
        </label>

      </div>
    );
}
