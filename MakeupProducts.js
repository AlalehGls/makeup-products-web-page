import React, { useState, useEffect, useContext } from "react";
import "./MakeupProducts.css";
import FilterCategory from "./filter-component/FilterCategory";
import MakeupProductsTable from "./tbl-component/MakeupProductTable";
import DarkModeToggle from "./DarkModeToggle";

import { ThemeContext } from "./App";

export default function MakeupProducts({setDark}) {

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        setConversionRates(data.rates);
      })
      .catch((error) => {
        console.log("Error fetching conversion rates:", error);
      });
  }, []);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const convertPrice = (price) => {
    const conversionRate = conversionRates[currency];
    console.log(conversionRate);
    if (conversionRate) {
      const convertedPrice = (price * conversionRate).toFixed(2);
      return `${currency} ${convertedPrice}`;
    }
    return price;
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const categorizedProducts = selectedCategory
    ? filteredProducts.filter(
        (product) => product.category === selectedCategory
      )
    : filteredProducts;

  const categories = products.reduce((uniqueCategories, product) => {
    if (!uniqueCategories.includes(product.category)) {
      uniqueCategories.push(product.category);
    }
    return uniqueCategories;
  }, []);

  const DarkMode= useContext(ThemeContext);

  return (
    <div className="makeup-products">
      <div className={`form-container ${DarkMode?'dark-mode': 'light-mode'}`}>
        <FilterCategory
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          currency={currency}
          handleCurrencyChange={handleCurrencyChange}
          categories={categories}
        />
         <DarkModeToggle setDark={setDark} /> 
         {DarkMode?"DarkMode":"LightMode"} 
      </div>
      <table className="makeup-products-table">
        <MakeupProductsTable
          categorizedProducts={categorizedProducts}
          convertPrice={convertPrice}
        />
      </table>
    </div>
  );
}
