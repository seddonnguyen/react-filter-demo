import React from 'react'

//pass props to visible dogs component
const VisibleDogs = (props) => {
    return (
        <div>

            <h1>{ props.name }</h1>

            <p>{ props.purpose }</p>

            <p>{ props.temperament }</p>
        </div>
    )
}

export default VisibleDogs