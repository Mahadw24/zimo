import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const setCartData = (cartItems) => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    };

    useEffect(() => {
        setCartItems(getCartData());
    },[])
    
    const getCartData = () => {
        const cartItems = sessionStorage.getItem('cart');
        return cartItems ? JSON.parse(cartItems) : [];
    };
    
    // const [cartItems, setCartItems] = useState(getCartData());
    const [cartItems, setCartItems] = useState([]);


    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setCartData([...cartItems, item]);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const checkForDisabled = (id) => {
        const found = cartItems.filter(item => item.id === id)
        if (found.length > 0) {
            console.log('inside if', found);
            return true;
        }
        else {
            console.log('inside else', found);
            return false;
        }
    }

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        checkForDisabled
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};