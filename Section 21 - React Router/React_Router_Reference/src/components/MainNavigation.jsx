import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./mainnavigation.module.css"



const MainNavigation = () => {
  return (
    <>
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink className={({isActive}) => (isActive ? classes.active : undefined)} to='/'>Home</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? classes.active : undefined)} to='/products'>Products</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? classes.active : undefined)} to='/testing'>
                        {({ isActive, isPending, isTransitioning }) => (
                            <>
                                <i className={isActive ? 'activeitem' : ''} />
                                <span>isActive child</span>
                            </>
                        )}
                      </NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? classes.active : undefined)} to=''></NavLink></li>  
                </ul>
            </nav>
        </header>
    
    </>
  )
}

export default MainNavigation