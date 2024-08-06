import React, { useState } from 'react'
import './Nav.css'

import { Link } from 'react-router-dom'

const Nav = () => {

  const [menu, setMenu] = useState("page1");

  return (
    <div className='nav'>
            <div onClick={() => {setMenu("page1")}} className={menu === 'page1' ? 'nav-item active':'nav-item'} > <Link style={{textDecoration: 'none'}} to='/'>1</Link> </div>
            <div onClick={() => {setMenu("page2")}} className={menu === 'page2' ? 'nav-item active':'nav-item'} > <Link style={{textDecoration: 'none'}} to='/page2'>2</Link> </div>
            <div onClick={() => {setMenu("page3")}} className={menu === 'page3' ? 'nav-item active':'nav-item'} > <Link style={{textDecoration: 'none'}} to='/page3'>3</Link> </div>
            <div onClick={() => {setMenu("page4")}} className={menu === 'page4' ? 'nav-item active':'nav-item'} > <Link style={{textDecoration: 'none'}} to='/page4'>4</Link> </div>
            <div onClick={() => {setMenu("page5")}} className={menu === 'page5' ? 'nav-item active':'nav-item'} > <Link style={{textDecoration: 'none'}} to='/page5'>5</Link> </div>
   </div>
  )
}

export default Nav;