import React from 'react';
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './logo.png'
import Frame from '../../../images/logos/Frame.png'
import './Header.css'

const Header = () => {
    return (
        <section style={{ backgroundColor: '#FBD062'}} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 logo">
                            <img src={logo} className="img-fluid" alt="asd"></img>
                        </div>
                        <div className="col-md-10 menu text-right">
                            <nav>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/home">Our Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/activities">Our Team</Link>
                                </li>
                                <li>
                                    <Link to="/login">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/login"><Button className='header-btn'>Login</Button>
                                </Link>
                                </li>
                            </ul>
                            </nav>
                        </div>
                </div>
                <div className="row header-content">
                    <div className="col-md-5 content-left">
                        <h1 >Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a amet dolore nemo quis perferendis!</p>
                        <Button className='header-btn'>Hire Us</Button>
                    </div>
                    <div className="col-md-7">
                        <img className="img-fluid" src={Frame} alt=""/>
                    </div>
                </div>
                </div>
        </section>

    );
};

export default Header;