
import React, { Component } from 'react'

const FilterForm = (props) => {
    // handleChange function here to set dogFilter in state to value of event target

    const handleChange = (event) => {
        props.filterDogs(event.target.value)
    }

    //pass event target value to filterDogs function in handleChange




    return (
        <div>
            <label>Filter by Dog: </label>
            <input type="text" id="filter"
                onChange={ handleChange }
            />
        </div>
    )
}


export default FilterForm