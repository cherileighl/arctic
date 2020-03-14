import React from 'react';
import * as bs from 'react-bootstrap';
// import Products from './products';
import {useParams} from "react-router-dom";
import ProductCard from './ProductCard';
import AppContext from './context';


function Category() {
    let { cat } = useParams()
    const context = React.useContext(AppContext)

    // const myProducts = Object.values(context.products)
    // const myCategory = context.categories.find(category => category.title === cat).id
    // myProducts.filter(p => {
    //     return (p.category === myCategory)
    // })


    const displayCategories = Object.values(context.products).filter(p => {
        return (p.category === context.categories.find(category => category.title === cat).id)
    })

    
    if (displayCategories.length === 0) {
        return (
            <h1>Page not found</h1>
        )
    } 
    else {
        return (
            <bs.Row>
                {Object.values(displayCategories).map((product, id) => {
                    return (
                        <bs.Col xs={3} key={id}>
                            <ProductCard p={product}/>
                            <br></br> 
                        </bs.Col>             
                    )  
                })}
            </bs.Row>
        )
    }              
}

export default Category;