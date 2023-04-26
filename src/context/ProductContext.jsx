import React, { createContext, useState, useEffect, useContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchproducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data)
      setProducts(data);
      setisLoading(false)
    };
    fetchproducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductsItems = () => {
  return useContext(ProductContext);
};
