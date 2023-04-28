import React, { createContext, useState, useEffect } from "react";
import CartItem from "../components/CartItem";

// Context export
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState([]);
  //itemamount state
  const [itemAmount, setItemAmount] = useState(0);
  //Total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  //update item ammount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  // Add to cart
  const addcart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //ITEM aLREADY
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount * 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //deletecart
  const deleteCart = () => {
    setCart([]);
  };

  //Plus
  const plus = (id) => {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  //minus

  const minus = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };
  return (
    <CartContext.Provider
      value={{
        total,
        cart,
        addcart,
        removeFromCart,
        deleteCart,
        plus,
        minus,
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
