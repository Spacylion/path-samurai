import React from "react"
import Friends from "./Friends/Friends"
import s from "./Navbar.module.css"

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={s.nav__item}>
        <a href='/users'>Users</a>
      </div>
      <div className={s.nav__item}>
        <a href='/dialogs'>Messages</a>
      </div>
      <div className={s.nav__item}>
        <a href='/news'>News</a>
      </div>
      <div className={s.nav__item}>
        <a href='/music'>Music</a>
      </div>
      <div className={s.nav__item}>
        <a href='/friend'></a>
        <Friends friends={props.friends} />
      </div>
    </nav>
  )
}

export default Navbar
