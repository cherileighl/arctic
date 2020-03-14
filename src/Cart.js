import React from 'react';
import * as bs from 'react-bootstrap';
import AppContext from './context';

function Cart() {
    const context = React.useContext(AppContext)
    // match productID in cart to the actual product

    // find correct product in context.products then display it
    console.log(context.cart)
    // const myCart = Object.entries(context.cart).find(item => {
    //     return (item.id === context.products.id)
    // })
    const myCart = Object.entries(context.cart).map(([pID, qty]) => {
        return (context.products.pID === pID).pID
    })
    console.log(myCart)

    // const displayCategories = Object.values(context.products).filter(p => {
    //     return (p.category === context.categories.find(category => category.title === cat).id)
    // })

    return (
    <table>
        <thead>
            <tr>
                <th>Cart</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                    
                    {/* <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td><img 
                        src={`../products/${p.filename}-4.png`} 
                        // style={{ width: '30px', height: '30px', marginRight: '3px'}} 
                        className="thumbnail rounded" 
                        alt="productImg"
                    /></td>
                    <td>{qty}</td>
                    <td>{(qty * p.price)}</td> */}
                    
                    
            </tr>
        </tbody>
    </table>
        
        
    )
}

export default Cart;