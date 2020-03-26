import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Load Navbar
import Navbar from "./component/Navbar";
// Load Halaman
import Products from "./page/Products";
import User from "./page/User";
import Register from './page/Register'
import Product from "./page/product";
import Cart from "./page/cart";
import Login from "./page/Login";
import Profil from "./page/Profil";
import Orders from "./page/Orders";
import Checkout from "./page/Checkout";


class Main extends Component {
  render() {
    return (
      <Switch>
        {/* Load component tiap halaman */}

        <Route exact path="/" component={Login} />
        {/* product */}
        <Route path="/products">
          <Navbar />
          <Products />
        </Route>
        {/* user */}
        <Route path="/user">
          <Navbar />
          <User />
        </Route>
        {/* REGISTER */}
        <Route path="/register">
        <Register/>
        </Route>
        {/* product */}
        <Route path="/product">
          <Navbar />
          <Product />
        </Route>
        <Route path="/cart">
          <Navbar />
          <Cart />
        </Route>
        <Route path="/Profil">
          <Navbar />
          <Profil />
        </Route>
        <Route path="/Order">
          <Navbar />
          <Orders />
        </Route>
        <Route path="/Login">
          <Navbar />
          <Login />
        </Route>
        <Route path="/Checkout">
          <Navbar />
          <Checkout />
        </Route>
      </Switch>
    );
  }
}

export default Main;
