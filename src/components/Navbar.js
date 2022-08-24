import React from "react";

function Navbar() {
    return(
        <div className="bg-dark text-light sticky-top">
            <ul className="nav justify-content-center">
                <li className="px-4">About</li>
                <li className="px-4">Projects</li>
                <li className="px-4">Articles</li>
                <li className="px-4">Links</li>
                <li className="px-4">Resume</li>
            </ul>
        </div>
    );
} 

export default Navbar;