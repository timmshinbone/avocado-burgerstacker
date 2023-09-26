import React, { Component } from 'react'
import IngList from './IngList'

// class components are different than function components
// they use class style conventions vs function conventions
// they have key:value pairs and methods
// they hold state in an object.
export default class BurgerStacker extends Component {
    // to initialize your state in a class, you just have to do like this:
    state = {
        ingredients: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
        ]
    }
    // we want to loop over the state, and render each item
    // each item needs to be clickable -> to add to the burger
    // to access state, we need to call 'this.state...'
    // that's because we're using a class
    // ingredientsJsx = this.state.ingredients.map(ing => {
    //     return <p>{ing.name}</p>
    // })
    
    // class components are built with a render method, that tells react what to display on the screen.
    render () {
        // console.log('this is ingredientsJsx', this.ingredientsJsx)
        return (
            <>
                <h1>Burger Stacker</h1>
                <IngList ingredients={ this.state.ingredients }/>
            
            </>
            
        )
    }
}