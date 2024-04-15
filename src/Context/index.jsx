import { createContext, useState, useEffect } from "react";

export const ShopiCardContext = createContext();

export const ShopiCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [showProductCard, setShowProductCard] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState(null);
  const [filterProducts, setFilterProducts] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  const changeDetail = () => {
    setOpenDetail(!openDetail);
  };

  const shoppingCartShow = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products?.filter((product) =>
      product.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredProductsByTitle(products, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory).filter(
        (product) =>
          product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType ) {
      return products;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilterProducts(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          products,
          searchByTitle,
          searchByCategory
        )
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilterProducts(
        filterBy("BY_TITLE", products, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && searchByCategory) {
      setFilterProducts(
        filterBy("BY_CATEGORY", products, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && !searchByCategory) {
      setFilterProducts(
        filterBy(null, products, searchByTitle, searchByCategory)
      );
    }
  }, [products, searchByTitle, searchByCategory]);

  console.log(filterProducts);

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
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filterProducts,
        setFilterProducts,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShopiCardContext.Provider>
  );
};
