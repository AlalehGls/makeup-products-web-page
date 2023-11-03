import React from "react";
import SearchInput from "./SearchInput";
import CategorySelect from "./CategorySelect";
import CurrencySelect from "./CurrencySelect";
// import { ThemeContext } from "../App";


export default function FilterCategory({
  searchText,
  handleSearchTextChange,
  categories,
  selectedCategory,
  handleCategoryChange,
  currency,
  handleCurrencyChange,
}) 


{

  return (
    <>

      <SearchInput
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />

      <CategorySelect
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        categories={categories}
      />
      <CurrencySelect
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />
    </>
  );
}
