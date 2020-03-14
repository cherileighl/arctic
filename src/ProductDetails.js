import React from 'react';
import * as bs from 'react-bootstrap';
// import products from './products';
import {useParams, useHistory} from 'react-router-dom';
import AppContext from './context';



function ProductDetails() {
    const context = React.useContext(AppContext)
    let { pID } = useParams()
    let history = useHistory()
    const details = Object.values(context.products).find(p => {
        return (p.id === Number(pID))
    })
    
    //[getter, setter] = React.useState(give it initial value)
    //when mouse enters one of those images, call setImgIdx and set it to be 1, 2, 3, 4
    const [imgIdx, setImgIdx] = React.useState(1)

    if (!details) {
        return (
            <h1>Product not found</h1>
        )
    }
    else {
    return (
        <React.Fragment>
        <bs.Container>
            <bs.Row>
                <bs.Col md={7}>
                    <h1>{details.name}</h1>
                    <h5 style={{color: '#FECEAB'}}>${Number(details.price).toFixed(2)}</h5>
                    <p style={{color: '#99B898'}}>{details.description}</p>
                </bs.Col>
                <bs.Col md={5}>
                    <img 
                        src={`../products/${details.filename}-${imgIdx}.png`} 
                        style={{ width: '300px', height: '300px', marginRight: '3px'}} 
                        className="float-right border 5px border-info rounded"
                        alt="product"
                    />
                </bs.Col>
               
            </bs.Row>

            <bs.Button 
                variant="warning" 
                onClick={
                    e => {context.addToCart(details.id)
                    history.replace("/cart")}}>Add to Cart</bs.Button>
            
            <br></br>
                <img 
                    onMouseEnter={e => {
                        setImgIdx(4)
                    }}
                    src={`../products/${details.filename}-4.png`} 
                    style={{ width: '30px', height: '30px', marginRight: '3px'}} 
                    className="thumbnail float-right rounded" 
                    alt="inverse"
                />
                <img 
                    onMouseEnter={e => {
                        setImgIdx(3)
                    }}
                    src={`../products/${details.filename}-3.png`} 
                    style={{ width: '30px', height: '30px', marginRight: '3px'}} 
                    className="thumbnail float-right rounded" 
                    alt="postcard"
                />
                <img 
                    onMouseEnter={e => {
                        setImgIdx(2)
                    }}
                    src={`../products/${details.filename}-2.png`} 
                    style={{ width: '30px', height: '30px', marginRight: '3px'}} 
                    className="thumbnail float-right rounded" 
                    alt="blackwhite"
                />
                <img 
                    onMouseEnter={e => {
                        setImgIdx(1)
                    }}
                    src={`../products/${details.filename}-1.png`} 
                    style={{ width: '30px', height: '30px', marginRight: '3px'}} 
                    className="thumbnail float-right rounded" 
                    alt="original"
                />
        </bs.Container>
    </React.Fragment>
    )
    }
}

export default ProductDetails;