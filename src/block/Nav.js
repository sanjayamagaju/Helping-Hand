import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="HELPING HAND.HTML" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="helper.html">Helpers</a></li>
                <li><a href="gallery.html">Gallery</a></li>
            </ul>
        </nav>
    );
}

export default Nav;