import React from 'react'

//pass props to visible dogs component
const VisibleDogs = (props) => {
    console.log("visible dogs", props)
    return (
        <div>


            <h1>{ props.dog.name }</h1>
            {/* put breed's purpose in p tag */ }

            {/* put breed's origin in p tag */ }

        </div>
    )
}

export default VisibleDogs