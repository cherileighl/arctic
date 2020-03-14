import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import {produce} from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            //methods
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart
        }
        this.state = {
            categories: {},
            products: {},
            cart: {},
            cartCount: 0
        }
    }

    //fat arrow function binds it to class so it can be called with this.addToCart()
    //Immutability: permanent, can't change it
    // 
    addToCart = (pID) => {
        this.setState(state => produce(state, draft => {
            const qty = draft.cart[pID]
            if (!qty) {
                draft.cart[pID] = 1
            }
            else {
                // add product id to cart
                draft.cart[pID] += 1;
            }
            // increase cart count
            draft.cartCount++;
            // Object.values(draft.cart).map(p => 
            //     draft.cartCount += p)

        }));

    }

    removeFromCart = pID => {

    }

    render() {
        if (!this.state.categories) {
            return <div>Loading...</div>
        }
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        const respCat = await axios.get('http://localhost:8000/api/category/')
        console.log(respCat.data)
        const respProd = await axios.get('http://localhost:8000/api/product/')
        console.log(respProd.data)

        this.setState({
            ...this.state,
            categories: respCat.data,
            products: respProd.data
            }) 

            // actions = {}

            // state = {
            //     cart: {}, //loop through cart to get cart count?
            //     cartCount: 0; // 
            // }

            // what do we map to keep track of what's in the cart?
            // cart[pID] = qty
            // Modify cart: cart[productID] = cart...something
    }

}
