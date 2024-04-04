import { createContext, useState } from "react";

export const ShopiCardContext = createContext();

export const ShopiCardProvider = ({children}) => {
  const [count, setCount] = useState(0)
  console.log("count", count);
  const [openDetail, setOpenDetail ] = useState(false)

  return (
    <ShopiCardContext.Provider value={{
      count, 
      setCount,
      openDetail,
      setOpenDetail
    }}>
        {children}
    </ShopiCardContext.Provider>
    )
}