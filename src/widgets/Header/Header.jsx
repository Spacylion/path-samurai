import { NavLink } from "react-router-dom"
import logo from "@/app/assets/logo.png"
import s from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.header__image} src={logo} alt='' />
      <div className={s.login__block}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
