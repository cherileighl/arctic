import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import * as bs from 'react-bootstrap';
import Top from './headerComp';
import About from './about';
import Category from './Category'
import Help from './help';
// import Home from './home';
import Left from './leftComp';
//import Right from './rightComp';
import Footer from './footerComp';
import ProductDetails from './ProductDetails';
import Product from './Product';
import Cart from './Cart';
//import NotFound from './NotFound';


function App(props) {
 
  return (
    <Router>
      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
        <bs.Row noGutters  className="flex-grow-0 flex-shrink-0">
          <bs.Col className="px-3 py-0" style={{ backgroundColor: "#121C11"}}>
            <Top />
          </bs.Col>
        </bs.Row>


        <bs.Row noGutters className="flex-grow-1">
          <bs.Col md="2" className="px-3 py-4 shadow" style={{ backgroundColor: "#6C5B7B"}}>
            <Left />
          </bs.Col>
            

          <bs.Col md="10" className="px-3 py-4 shadow" style={{ backgroundColor: "#2E2E2E"}}>

            <Switch>
              <Route exact path="/" component={Product}>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/product/:pID" component={ProductDetails}>
              </Route>
              <Route path="/category/:cat" component={Category}>
              </Route>
              <Route component={Cart} path="/cart" >
              </Route>
            </Switch>
         

          </bs.Col>
          </bs.Row>

          {/* <bs.Col md="2" className="px-3 py-4 shadow" style={{ backgroundColor: "#6C5B7B"}}>
              <Right/>
          </bs.Col> */}

          <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
            <bs.Col className="px-3 py-2" style={{ backgroundColor: "#F67280"}}>
              <Footer/>
            </bs.Col>
          </bs.Row>
      </bs.Container>
    </Router>
   
  );
}

export default App;
