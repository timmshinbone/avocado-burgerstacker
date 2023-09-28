import React, { useState } from 'react'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

// first thing we need to do when converting from Class Components to Functions
// we need to get rid of the Class syntax.
// that includes refs to 'this', 'this.state'
// this also includes the state object
// and any use of setState.
// this means the state object will need to change as well.
// the old starting line:
// export default class BurgerStacker extends Component {
const BurgerStacker = () => {
    const ingredients = [
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
    ]
    // this will change
    // this was our old piece of state that the user interaction updates
    // we'll turn this into a hook with useState
    // const burgerIngredients = []
    const [burgerIngredients, setBurgerIngredients] = useState([])
    // the useState hook has three requirements:
    // first, the name of the piece of state: burgerIngredients
    // second, the name of the updater function: setBurgerIngredients
    // third, the initial value passed to the useState function: []

    const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        console.log(`clicked ${ingName} and it is ${ingColor}`)
        // the old way, using class components:
        // this.setState({
        //     burgerIngredients: [
        //         { name: ingName, color: ingColor },
        //         ...this.state.burgerIngredients
        //     ]
        // })
        setBurgerIngredients(
            [{ name: ingName, color: ingColor }, ...burgerIngredients]
        )
    }

    const removeFromStack = (e) => {
        const clickIndex = e.target.id
        const currBurger = burgerIngredients.slice()
        currBurger.splice(clickIndex, 1)
        // the old way:
        // this.setState({
        //     burgerIngredients: currBurger
        // })
        setBurgerIngredients(currBurger)
    }

    const clearBurger = () => {
        // this.setState({
        //     burgerIngredients: []
        // })
        setBurgerIngredients([])
    }
    
    return (
        <>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngList 
                    ingredients={ingredients}
                    add={addToStack}
                />
                <BurgerPane 
                    ingredients={burgerIngredients}
                    clear={clearBurger}
                    remove={removeFromStack}
                />
            </div>
        </>
        
    )
}

export default BurgerStacker