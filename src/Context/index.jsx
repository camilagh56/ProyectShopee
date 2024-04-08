import { createContext, useState } from "react";

export const ShopiCardContext = createContext();

export const ShopiCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [showProductCard, setShowProductCard] = useState({})

  const changeDetail = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <ShopiCardContext.Provider
      value={{
        count,
        setCount,
        openDetail,
        setOpenDetail,
        changeDetail,
        showProductCard,
        setShowProductCard
      }}
    >
      {children}
    </ShopiCardContext.Provider>
  );
};
