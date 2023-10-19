import s from "./Navbar.module.css"

const Navbar = () => (
  <nav className={s.nav}>
    <div className={s.nav__item}>
      <a href='/profile'>Profile</a>
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
  </nav>
)

export default Navbar
