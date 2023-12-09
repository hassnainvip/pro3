import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";

const cartFromLocalStorage = JSON.parse(
  typeof window !== "undefined" ? localStorage.getItem("cart") || "[]" : "[]"
);

// const DiscountFromLocalStorage = JSON.parse(
//   typeof window !== "undefined"
//     ? localStorage.getItem("discount_apply") || "[]"
//     : "[]"
// );

const TotalFromLocalStorage = JSON.parse(
  typeof window !== "undefined" ? localStorage.getItem("total") || "0" : "0"
);

const OriginalFromLocalStorage = JSON.parse(
  typeof window !== "undefined" ? localStorage.getItem("original_price") || "0" : "0"
);

const TotalQuantityFromLocalStorage = JSON.parse(
  typeof window !== "undefined"
    ? localStorage.getItem("total_quantity") || "0"
    : "0"
);

const Context = createContext();

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || "[]" )

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const [totalPrice, setTotalPrice] = useState(TotalFromLocalStorage);
  const [originalPrice, setOriginalPrice] = useState(OriginalFromLocalStorage);

  const [totalQuantities, setTotalQuantities] = useState(
    TotalQuantityFromLocalStorage
  );
  const [appliedDiscounts, setAppliedDiscounts] = useState([]);

  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("total", JSON.stringify(totalPrice));
    localStorage.setItem("total_quantity", JSON.stringify(totalQuantities));
    localStorage.setItem("original_price", JSON.stringify(originalPrice));
    localStorage.setItem("discount_apply", JSON.stringify(appliedDiscounts));
  }, [cartItems, appliedDiscounts]);

  // Load cart data from cookies on component mount

  // Save cart data to localStorage and cookies whenever the cart state changes

  //it adds multiple products

  // const onAdd = (product, quantity) => {
  //   const checkProductInCart = cartItems.find(
  //     (item) => item._id == product._id
  //   );
  //   setTotalPrice(
  //     (prevTotalPrice) => prevTotalPrice + product.price * quantity
  //   );
  //   setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

  //   if (checkProductInCart) {
  //     const updatedCartItems = cartItems.map((cartProduct) => {
  //       if (cartProduct._id === product._id)
  //         return {
  //           ...cartProduct,
  //           quantity: cartProduct.quantity + quantity,
  //         };
  //     });

  //     setCartItems(updatedCartItems);
  //   } else {
  //     product.quantity = quantity;
  //     product.originalPrice = product.price; // Store the original price

  //     setCartItems([...cartItems, { ...product }]);
  //   }
  // };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    if(product.price != product.discountprice ){
      product.originalPrice = product.price; // Store the original price
      setOriginalPrice(product.originalPrice);
      setTotalPrice(product.originalPrice * 1);
      setTotalQuantities(1);
      product.quantity = 1;
    }
    if(product.price === product.discountprice) {
    product.price = originalPrice
    setTotalPrice(product.originalPrice * 1);
    setTotalQuantities(1);
    product.quantity = 1;
  }
    setCartItems([product]);
  };


  const onAddDiscount = (product, isDiscountApplied) => {
    // Update the cart items with the new price and quantity
    setTotalQuantities(3)
    const updatedCartItems = cartItems.map((cartProduct) => {
      if (cartProduct._id === product._id) {
        return {
          ...cartProduct,
          price: cartProduct.discountprice, // Use the original price
          quantity:  3,
        };
      }
      return cartProduct;
    });

    setCartItems(updatedCartItems);

    // Update the total price and quantities
    const updatedTotalPrice = product.discountprice

    const updatedTotalQuantities = 3

    setTotalPrice(updatedTotalPrice);
    setTotalQuantities(updatedTotalQuantities);
    // Update the applied discounts array
    // if (isDiscountApplied) {
    //   setAppliedDiscounts([product._id]);
    // } else {
    //   console.log(appliedDiscounts)
    //   const updatedAppliedDiscounts = appliedDiscounts.filter(
    //     (id) => id !== product._id
    //   );
    //   setAppliedDiscounts(updatedAppliedDiscounts);
    // }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  //toggle for cart

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id); //filter and it dont mutate/ like splice delete the older one and update the cart

    if (value == "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value == "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        onAddDiscount,
        appliedDiscounts,
        setAppliedDiscounts,
        originalPrice,
        setOriginalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
