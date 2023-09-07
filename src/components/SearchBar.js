import React from "react"

import "./SearchBar.css"

const SearchBar = ({ filterText, inStockOnly, onInStockOnlyChange, onFilterTextChange }) => {
    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <label style={{ display: 'block' }}>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
};

export default SearchBar;
