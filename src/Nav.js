import React from 'react';
import "./Nav.css";

function Nav() {
    return (

        <div className = 'Nav'>
            <div className = 'nav_contents'>
                <div className='nav_logo'>
                    <img src = 'https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=26' alt=""/>
                </div>

                <div className="nav_avatar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                </div>
            </div>
        </div>   
    );
}

export default Nav;
