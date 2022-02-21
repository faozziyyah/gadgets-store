import React from 'react';
import { createContext, useReducer, useContext } from 'react'; 
import {Products}  from '../cart'
import { cartReducer } from './Reducers'

const Cart = createContext();

const Context = ({ children }) => {

    const products = [...Array(6)].map(() => ({
        id: Products.id,
        name: Products.name,
        price: Products.price,
        image: Products.img,
        delivery: Products.delivery
    }));

    console.log(products);

    const [state, dispatch] = useReducer(cartReducer, {
        products: Products,
        cart: []
    })

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
    return useContext(Cart)
};
