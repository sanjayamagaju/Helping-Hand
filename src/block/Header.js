import React from 'react';
import SearchBar from './SearchBar';
import Nav from './Nav';
function Header() {
    return (<div>
        <img src="https://dcassetcdn.com/design_img/2680721/621582/621582_14745063_2680721_2b2796d2_image.jpg" class="logo" alt="Logo"></img>
    </div>
        ,
        <SearchBar />
        ,
        <Nav />);
}
export default Header;

