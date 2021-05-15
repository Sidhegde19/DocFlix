import React, { useState,useEffect} from 'react';
import "../src/css/Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (

        <div className = {`nav ${show && 'nav__black'}`}>
            <div className = 'nav_contents'>
                <div>
                    <img className='nav_logo' src = 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=""/>
                </div>

                <div>
                    <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                </div>
            </div>
        </div>   
    );
}

export default Nav;
