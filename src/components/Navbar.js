import React from "react";

function Navbar() {
    return(
        <div className="pa3 bg-near-black light-silver">
            <ul className="flex justify-center list">
                <li className="ph4">About</li>
                <li className="ph4">Projects</li>
                <li className="ph4">Articles</li>
                <li className="ph4">Links</li>
                <li className="ph4">Resume</li>
            </ul>
        </div>
    );
} 

export default Navbar;