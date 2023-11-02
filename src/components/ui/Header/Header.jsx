import s from "./Header.module.css"
import logo from "../../../assets/logo.png"
import { NavLink } from "react-router-dom"
const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.header__image} src={logo} alt='' />
      <div className={s.login__block}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header
