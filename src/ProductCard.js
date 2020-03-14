import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return (
        <React.Fragment>
        <bs.Card style={{ width: '18rem' }}>
                    
        <bs.Card.Img variant="top" src={`../products/${props.p.filename}-1.png`} className="img-fluid"/>

        <bs.Card.Body>  
            <bs.Card.Title>{props.p.name}</bs.Card.Title>
            <bs.Card.Text>
            ${Number(props.p.price).toFixed(2)}
            </bs.Card.Text>
            <Link to={`/product/${props.p.id}`} variant="info" className="btn btn-success position-absolute" style={{top: '0px', right: '0px'}}>Details</Link>
        </bs.Card.Body>    
        </bs.Card>  

            
            <br></br> 
        </React.Fragment>
    )  
}

export default ProductCard;
