import React from 'react';
import axios from 'axios';
const Header = () => {
    const signUp = async () => {
        const { data } = await axios.get('/auth/signup');
        console.log(data);
    };
    const logIn = async () => {
        const { data } = await axios.get('/auth/login');
        console.log(data);
    };
    const logOut = async () => {
        const { data } = await axios.get('/auth/logout');
        console.log(data);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <h5>Hoe</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <h5>Features</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <h5>Pricing</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <h5>About</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="signup">
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => signUp()}
                                >
                                    <h5>Sign Up</h5>
                                </button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="login">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => logIn()}
                                >
                                    <h5>Login</h5>
                                </button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="logout">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => logOut()}
                                >
                                    <h5>Logout</h5>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
