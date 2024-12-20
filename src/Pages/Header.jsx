import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Header.css';
import Home from './Home';

const Header = () => {


  return (
    <div>
        <nav>
            <ul>
                <li><Link to ="/" className='a'>Nikita Rawat</Link></li>
                <span style={{paddingLeft:"700px"}}>
                <li><Link to="/" className='a'>Home</Link></li>
                  <li><Link to="/about" className='a'>About</Link></li>
                  <li><Link to="/blog" className='a'>Blogs</Link></li>
                  <li><Link to="/contact" className='a'>Contact</Link></li>
                  <li><Link to="/resume" className='a'>Resume</Link></li>
                  </span>
            </ul>

        </nav>
        <Outlet/>
        
    </div>
  )
}

export default Header