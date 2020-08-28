import React, { Component } from 'react'
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div classsName="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach resort" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle} >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms" >Rooms</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}



export default Navbar;