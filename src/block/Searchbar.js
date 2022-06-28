import React from 'react';

function SearchBar() {
    return (
        <div className="search">
        <form action="/search" method="GET">
            <input type="text" name="s" id="search" />
            <button type="submit">Search</button>
        </form>
    </div>
    )
}

export default SearchBar;