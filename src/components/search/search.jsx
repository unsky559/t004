import React from 'react';
import "./search.scss";

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search..."/>
            <button><img src="../static/icons/icon_search.png" alt=""/></button>
        </div>
    );
};

export default Search;