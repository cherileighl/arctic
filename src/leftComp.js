import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Products from './products';
import AppContext from './context';

function Left(props) {
    const context = React.useContext(AppContext)
    return (
        <bs.Nav defaultActiveKey="/" className="flex-column">
            <Link to="/">All Products ({context.products.length})</Link>
            <bs.Nav.Item>
                {Object.values(context.categories).map(c => {
                    return (
                            <Link key={c.id} to={`/category/${c.title}`}>{c.title} ({Object.values(context.products).filter
                                (p => {
                                    return (p.category === c.id)}).length
                                })
                            <br></br></Link>
                    )}        
                )}
                
            </bs.Nav.Item> 
        </bs.Nav>
    )
}
       
export default Left;