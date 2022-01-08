import React from 'react';
import "./search.scss";
import Dropdown from "../dropdown/dropdown";

const Search = () => {
    return (
        <div className="searchContainer">
            <Dropdown header={
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <button><img src="../static/icons/icon_search.png" alt=""/></button>
                </div>
            }>
                <div className="searchResults">
                    <button>test</button>
                    <button>test</button>
                    <button>test</button>
                    <button>test</button>
                </div>
            </Dropdown>
        </div>
    );
};

export default Search;