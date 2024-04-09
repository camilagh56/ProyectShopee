import { createContext, useState } from "react";

export const ShopiCardContext = createContext();

export const ShopiCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [showProductCard, setShowProductCard] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [showCart, setShowCart] = useState(false);
  const [order, setOrder] = useState([])

  const changeDetail = () => {
    setOpenDetail(!openDetail);
  };

  const shoppingCartShow = () => {
    setShowCart(!showCart)
  }

  return (
    <ShopiCardContext.Provider
      value={{
        count,
        setCount,
        openDetail,
        setOpenDetail,
        changeDetail,
        showProductCard,
        setShowProductCard,
        cartProducts,
        setCartProducts,
        showCart,
        setShowCart,
        shoppingCartShow,
        order,
        setOrder,
      }}
    >
      {children}
    </ShopiCardContext.Provider>
  );
};
