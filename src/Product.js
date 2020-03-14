import React from 'react';
import * as bs from 'react-bootstrap';
// import products from './products';
import ProductCard from './ProductCard';
import AppContext from './context';

function Product(props) {
    const context = React.useContext(AppContext)

    return (
        <bs.Row>
            {Object.values(context.products).map((product, id) => {
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
 
export default Product;
