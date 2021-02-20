import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] =  useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav__black" }`}>
            <img
                className="nav__logo"
                src='./images/photo-1611162617474-5b21e879e113.jpeg'
                alt="Netflix logo"
            />

            <img
                className="nav__avatar"
                src='./images/photo-1611162617474-5b21e879e113.jpeg'
                alt="Netflix logo"
            />

        </div>
    )
}

export default Nav
