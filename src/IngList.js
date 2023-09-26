// this component will loop over the ingredients received from the parent
// produce one clickable ingredient per item
// this clickable item, will be another component, called Ingredient

import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngList extends Component {
    render () {
        console.log('props inside INGList', this.props)
        // this is called destructuring, very commonly used in react
        // with this syntax, we can pull items from objects and arrays
        const { ingredients } = this.props
        
        let allIngs = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient ingredient={ing} />
            </li>
        ))

        return (
            <>
                <p>Ingredient List</p>
                <ul>
                    { allIngs }
                </ul>
            </>
        )
    }
}