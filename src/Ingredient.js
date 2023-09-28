// this displays an individual ingredient, derived from props
// import React, { Component } from 'react'

// recieves one ingredient as a prop, and displays name and color
const Ingredient = (props) => {
    // destructure our ingredient properties
    const { name, color } = props.ingredient
    // console.log('name of ing', name)
    // console.log('color of ing', color)

    return (
        <p
            style={{ backgroundColor: color}}
            onClick={props.clickFunc}
            id={props.itemKey}
        >
            {name}
        </p>
    )
}

export default Ingredient