import React from "react"
import Friends from "./Friends/Friends"
import s from "./Navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__item}>
        <Link to='/profile'>Profile</Link>
      </div>
      <div className={s.nav__item}>
        <Link to='/users'>Users</Link>
      </div>
      <div className={s.nav__item}>
        <Link to='/dialogs'>Messages</Link>
      </div>
      <div className={s.nav__item}>
        <Link to='/news'>News</Link>
      </div>
      <div className={s.nav__item}>
        <Link to='/music'>Music</Link>
      </div>
      <div className={s.nav__item}>
        <Link to='/friend'>Friends</Link>
        <Friends friends={props.friends} />
      </div>
    </nav>
  )
}

export default Navbar
