import React from "react"
import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow"

import "./ProductTable.css"

const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    let lastcategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
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
