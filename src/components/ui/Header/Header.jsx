import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header__image} src='../../assets/logo.png' alt='' />
    </header>
  )
}

export default Header
