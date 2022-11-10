import React from 'react'
import '../App.css';
const Header = () => {
  return (
    <div>
        <section>
        <div className="container">
          <header className="nav-head">
           <div className='nav-head_items'>
           <ul className="list-items">
              <li>Home</li>
              <li>Data explorer</li>
              <li>Report & Resources</li>
              <li>Do you know zen Z ?</li>
            </ul>
            <button className="nav-btn">Share</button>
           </div>
          </header>
        </div>
      </section>
    </div>
  )
}

export default Header
