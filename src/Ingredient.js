// this displays an individual ingredient, derived from props
import React, { Component } from 'react'

// recieves one ingredient as a prop, and displays name and color
export default class Ingredient extends Component {
    render () {
        // destructure our ingredient properties
        const { name, color } = this.props.ingredient
        // console.log('name of ing', name)
        // console.log('color of ing', color)

        return (
            <p
                style={{ backgroundColor: color}}
                onClick={this.props.clickFunc}
            >
                {name}
            </p>
        )
    }
}