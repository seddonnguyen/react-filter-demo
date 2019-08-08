
import React, { Component } from 'react'

class FilterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogFilter: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            dogFilter: e.target.value
        })
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div>
                <label htmlFor="filter">Filter by Dog: </label>
                <input type="text" id="filter"
                    value={ this.state.dogFilter }
                    onChange={ this.handleChange } />
            </div>
        )
    }
}

export default FilterForm