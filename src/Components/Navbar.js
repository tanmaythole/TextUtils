import React, {useState} from 'react'
import PropTypes from 'prop-types'


function Navbar({title, toggle, btnText}) {
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={toggle} id="flexSwitchCheckDefault" />
                        <label htmlFor="flexSwitchCheckDefault" className="text-light">{btnText}</label>
                    </div>
                </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// Default Props
Navbar.defaultProps = {
    title: "Title"
}

export default Navbar
