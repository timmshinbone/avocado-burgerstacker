import React, { Component } from 'react'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

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
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'gold'}
        ],
        burgerIngredients: []
    }
    // we want to loop over the state, and render each item
    // each item needs to be clickable -> to add to the burger
    // to access state, we need to call 'this.state...'
    // that's because we're using a class
    // ingredientsJsx = this.state.ingredients.map(ing => {
    //     return <p>{ing.name}</p>
    // })

    // we need a function that adds an ingredient from the list to the burgerIngredients
    addToStack = (e) => {
        // this method will target the properties of the item clicked
        // build an object that resembles the original ingredient
        // then add that to the burgerIngredients by updating state
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        console.log(`clicked ${ingName} and it is ${ingColor}`)
        // class components come with an important built in method
        // this.setState is responsible for updating state
        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients
            ]
        })
    }

    // this method removes individuals items on click
    removeFromStack = (e) => {
        console.log('the original burger ingredients', this.state.burgerIngredients)
        // this will need to target an item in the burgerIngredients array
        const clickIndex = e.target.id
        console.log('the index of the item clicked', clickIndex)
        // remove that one piece
        // we'll use slice which creates a copy of the original array
        const currBurger = this.state.burgerIngredients.slice()
        // splice out the selected item
        currBurger.splice(clickIndex, 1)
        console.log('this is the current burger', currBurger)
        // set state with the newly updated array
        this.setState({
            burgerIngredients: currBurger
        })
    }

    // this clears the burgerIngredients
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }
    
    // class components are built with a render method, that tells react what to display on the screen.
    render () {
        // console.log('this is ingredientsJsx', this.ingredientsJsx)
        return (
            <>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngList 
                        ingredients={this.state.ingredients }
                        add={this.addToStack}
                    />
                    <BurgerPane 
                        ingredients={this.state.burgerIngredients}
                        clear={this.clearBurger}
                        remove={this.removeFromStack}
                    />
                </div>
            </>
            
        )
    }
}