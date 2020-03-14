import React from 'react';
import * as bs from 'react-bootstrap';

function Home(props) {
    return (
        <React.Fragment>
        
        <bs.Container fluid className="p-0">
            <bs.Row noGutters style={{ padding: "6rem 0"}}>
                <bs.Col>
                    <div className="text-center mt-5">
                        <img src="flask.jpg" alt="LabLogo">
                        </img>
                    </div>

                    <h1 className="text-center mt-5">Northwest Labs</h1>
                </bs.Col>
            </bs.Row>
        </bs.Container>
        </React.Fragment>
    )
};

export default Home;
