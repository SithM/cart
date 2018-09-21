import React, { Component } from 'react';
import './../css/menu.css';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        var isSearch = window.location.pathname.substring(1,6);
        console.log(isSearch);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <Link to="/" className="navbar-brand ">
                    <i className="fas fa-home iconSi "></i> Home
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto home">
                        <Link to="/admin-view" className="nav-link">
                            Admin
                        </Link>
                        <Link to="/user-view" className="nav-link">
                            User
                        </Link>
                    </ul>
                    
                    <form className={`form-inline my-2 my-lg-0 ${isSearch === 'admin' ? '' : 'd-none'}`}>
                        <input className="form-control mr-sm-2" id="myInput" type="text" placeholder="Search.."/>
                    </form>
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link mr-sm-2">
                                <i className="fas fa-user"></i> Login/Logout
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
                );
            }
        
        }
        
        export default Menu;
