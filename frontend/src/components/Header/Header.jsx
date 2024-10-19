import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>
                We create and deliver what you choose
            </h2>
            <p>Explore a unique collection of hand-drawn sketches, crafted with passion and precision. Each piece tells a story and captures the essence of creativity. Our mission is to bring art into your life, one beautiful sketch at a time.</p>
            {/* <button >View gallery </button> */}
            <a className='button' href='#explore-collections' onClick={()=>setcollections("collections")}>Browse gallery</a>
        </div>
    </div>
  )
}

export default Header




