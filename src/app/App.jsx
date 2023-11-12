// App.jsx
import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { connect } from "react-redux"
import { compose } from "redux"
import { initializeApp } from "./redux/reducers/appReducer"
import Preloader from "../features/Preloader/Preloader"
import HeaderContainer from "../widgets/Header/HeaderContainer"
import Navbar from "../widgets/Navbar/Navbar"
import Footer from "../widgets/Footer/Footer"
import News from "../pages/News/News"
import Music from "../pages/Music/Music"
import Settings from "../pages/Settings/Settings"
import DialogsContainer from "../pages/Dialogs/DialogsContainer"
import UsersContainer from "../pages/Users/UsersContainer"
import ProfileContainer from "../pages/Profile/ProfileContainer"
import LoginPage from "../pages/Login/Login"

const App = ({ initialization, initializeApp }) => {
  useEffect(() => {
    initializeApp()
  }, [initializeApp])

  if (!initialization) {
    return <Preloader />
  }

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization,
})

const AppContainer = compose(connect(mapStateToProps, { initializeApp }))(App)

export default AppContainer
