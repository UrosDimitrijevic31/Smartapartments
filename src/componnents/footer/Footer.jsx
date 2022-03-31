import React from 'react';
import './Footer.scss';

const Footer = () => {
    return(
        <footer className="footer bg-dark py-5">
            <div className="container grid grid-3">
            <div>
                <h1>Smart Apartments</h1>
                <p>Copyright&copy; 2022</p>
            </div> 
            <nav>
                <ul>
                    <li><a href="index.html">Blog</a></li>
                    <li><a href="features.html">FAQ</a></li>
                    <li><a href="docs.html">Contact</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
            </div>
        </footer>

        // <footer className="footer">
        //     <div className="footer-nav">
        //         <ul>
        //             <li>Search</li>
        //             <li>Blog</li>
        //             <li>FAQ</li>
        //             <li>Contact</li>
                    
        //         </ul>
        //     </div>
        //     <div className="contact-info">
        //         <h3>Conatct Us</h3>
        //         <ul>
        //             <li>
        //                 <i ></i>
        //                 0131 510 0201
        //             </li>
        //             <li>
        //                 <i></i>
        //                 office@inovatechit.com
        //             </li>
        //             <li>
        //                 <i></i>
        //                 Rasinska 57, Belgrade
        //             </li>
        //         </ul>
        //     </div>
        // </footer>
    )
}

export default Footer;