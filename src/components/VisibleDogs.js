import React from 'react'

//pass props to visible dogs component
const VisibleDogs = (props) => {
    console.log("visible dogs", props)
    return (
        <div>
            {/* put dog name in h1 tag */ }
            <h1>{props.dog.name}</h1>
            {/* put breed's purpose in p tag */ }
            <p>{props.dog.bred_for}</p>
            {/* put breed's origin in p tag */ }
            <p>{props.dog.life_span}</p>

        </div>
    )
}

export default VisibleDogs