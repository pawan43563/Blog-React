import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Navbar.module.scss'

const linkstyle={
    textDecoration: "none",
    color:'white',
    fontSize:'1.3rem'
};

export default function Navbar(){

    return(
        <div className={styles.navigation}>
        <div className={styles.logo}>
            <h1>Blogs</h1>
        </div>
        <nav>
            <ul>
                <Link to="/" style={linkstyle}>
                    Home
                </Link>        
            </ul>
        </nav>
    </div>
    )
}