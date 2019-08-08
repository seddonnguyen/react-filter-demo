
import React, { Component } from 'react'

class FilterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogFilter: ""
        }
    }
    // handleChange function here to set dogFilter in state to value of event target
    //pass event target value to filterDogs function in handleChange

    render() {
        // console.log("dog filter in filter form", this.state.dogFilter)
        return (
            <div>
                <label htmlFor="filter">Filter by Dog: </label>
                <input type="text" id="filter"
                // value={ this.state.dogFilter }
                // add onchange event listener
                />
            </div>
        )
    }
}

export default FilterForm