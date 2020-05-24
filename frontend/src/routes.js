import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import ListProducts from  './pages/ListProducts'
import Product from './pages/Product'
import Sale from './pages/Sale'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/ListProducts" component={ListProducts}/>
                <Route path="/products" component={Product}/>
                <Route path="/sales" component={Sale}/>



            </Switch>
        
        
        </BrowserRouter>
    )
}