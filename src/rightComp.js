import React from 'react';
import * as bs from 'react-bootstrap';

function Right(props) {
    return (
        // <bs.Nav defaultActiveKey="/home" className="flex-column">
        //     <bs.Nav.Link href="/home">Active</bs.Nav.Link>
        //     <bs.Nav.Link eventKey="link-1">Link</bs.Nav.Link>
        //     <bs.Nav.Link eventKey="link-2">Link</bs.Nav.Link>
        //     <bs.Nav.Link eventKey="disabled" disabled>
        //         Disabled
        //     </bs.Nav.Link>
        // </bs.Nav>
        <>
        <h3>Chemicals</h3>
        <ul>
            <li>Sucrose       
            </li>
            <li>       
                <img alt="sucrose" src="sucrose.png" className="chemImg"></img>
            </li>
            <li>Caffeine
            </li>
            <li>
                <img alt="caffeine" src="caffeine.png" className="chemImg"></img>
            </li>
            <li>Dopamine
            </li>
            <li>
                <img alt="dopamine" src="dopamine.png" className="chemImg"></img>
            </li>
        </ul>
        </>
    )
};

export default Right;