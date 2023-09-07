import React from "react"
import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow"

import "./ProductTable.css"

const ProductTable = ({ products }) => {
    const rows = [];
    let lastcategory = null;

    products.forEach((product) => {
        if (product.category !== lastcategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow 
                product={product}
                key={product.name}
            />
        );
        lastcategory = product.category;
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default ProductTable;
