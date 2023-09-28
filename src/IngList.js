// this component will loop over the ingredients received from the parent
// produce one clickable ingredient per item
// this clickable item, will be another component, called Ingredient

// import React, { Component } from 'react'
import Ingredient from './Ingredient'
// if I need props in a function component, we need a parameter for that
const IngList = (props) => {
    console.log('props inside INGList', props)
    // this is called destructuring, very commonly used in react
    // with this syntax, we can pull items from objects and arrays
    const { ingredients, add } = props
    
    let allIngs = ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient 
                ingredient={ing}
                clickFunc={add}
                itemKey={i}
            />
        </li>
    ))

    return (
        <section className='pane'>
            <h3>Ingredient List</h3>
            <ul>
                { allIngs }
            </ul>
        </section>
    )
}

export default IngList