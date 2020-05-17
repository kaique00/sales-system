import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import ListProducts from  './pages/ListProducts'
import Product from './pages/Product'
import Account from './pages/Account'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/ListProducts" component={ListProducts}/>
                <Route path="/products" component={Product}/>
                <Route path="/accounts" component={Account}/>



            </Switch>
        
        
        </BrowserRouter>
    )
}