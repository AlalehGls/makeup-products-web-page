import React from "react";

export default function CategorySelect({
  categories,
  selectedCategory,
  handleCategoryChange,
}) {
  return (
    <div className="form-row">
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}