import React from 'react';
import './LoginScreen.css';


function LoginScreen() {
    return (
        <div id = "loginScreen">
            <div className="loginScreen__background">
                <img className= "loginScreen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""></img>
                <button className="loginScreen__button">Sign In</button>

                <div className="loginScreen__gradient"></div>
                <div className="loginScreen__body">
                    <>
                        <h1>Only Documentaries, nothing more</h1>
                        <h2>Yeah, can't watch documentaries as of now. So....</h2>
                    </>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
