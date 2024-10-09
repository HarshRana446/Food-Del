import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      // Destructuring to create a copy of the previous state
      const updatedItems = { ...prev };

      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }

      return updatedItems;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
