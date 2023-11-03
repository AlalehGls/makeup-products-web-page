import React from "react";

export default function TblBody({ categorizedProducts, convertPrice }) {
  return (
    <tbody>
      {categorizedProducts.map((product) => (
        <tr key={product.id}>
          <td>
            <img src={product.image_link} alt={product.name} />
          </td>
          <td>{product.name}</td>
          <td>{convertPrice(product.price)}</td>
          <td>{product.description}</td>
        </tr>
      ))}
    </tbody>
  );
}
