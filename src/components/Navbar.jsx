import React, { useEffect, useState } from 'react'
import { BsCart3, BsMoonFill, BsSun, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import Navlinks from './Navlinks'
import { useSelector } from 'react-redux'

const themes = {
  winter: 'winter',
  dracula: 'dracula',
}

const getTheme = () => {
  return localStorage.getItem('theme') || themes.winter
}

const Navbar = () => {
  const [theme, setTheme] = useState(getTheme())

  const handleTheme = () => {
    const { winter, dracula } = themes
    const newTheme = theme === winter ? dracula : winter
    setTheme(newTheme)
  }

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-content'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center'
          >
            C
          </NavLink>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='w-6 h-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex '>
          <ul className='menu menu-horizontal'>
            <Navlinks />
          </ul>
        </div>
        <div className='navbar-end'>
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />

            <BsSunFill className='swap-on h-4 w-4' />
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='w-6 h-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
