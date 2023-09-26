// this component will loop over a list of added ingredients
// note: not the original list
// it will render Ingredient components for each item added to the burger
import React, { Component } from 'react'

// since Ingredient is reusable, we'll import that as well
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    render () {
        const { ingredients } = this.props
        
        let burgerBits = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient 
                    ingredient={ing}
                    itemKey={i}
                    clickFunc={this.props.remove}
                />
            </li>
        ))

        return (
            <section className='pane'>
                <h3>Burger Pane</h3>
                <ul>
                    { burgerBits }
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}