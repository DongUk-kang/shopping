import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import {Footer, Navbar} from "./components/partials";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {
    return (
        <div className={'App'}>
         <Router>
             <Navbar />
             <Switch>
                 <Route  path={'/'} exact component={Home} />
                 <Route  path={'/product'} exact component={Product} />
                 <Route  path={'/product/details'} exact component={ProductDetail} />
                 <Route path={'/signin'} exact component={Signin} />
                 <Route path={'/signup'} exact component={Signup} />
                 <Route path={'/admin/dashboad'} exact component={Signin} />
                 <Redirect from={'*'} to={'/'} />
             </Switch>
             <Footer />
         </Router>
        </div>
    );
};

export default App;
