/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom"
import React from "react"
import Navbar from "./components/ui/Navbar/Navbar"
import Footer from "./components/ui/Footer/Footer"
import News from "./components/ui/News/News"
import Music from "./components/ui/Music/Music"
import Settings from "./components/ui/Settings/Settings"
import DialogsContainer from "./components/ui/Dialogs/DialogsContainer"
import UsersContainer from "./components/ui/Users/UsersContainer"
import ProfileContainer from "./components/ui/Profile/ProfileContainer"
import HeaderContainer from "./components/ui/Header/HeaderContainer"
import LoginPage from "./components/ui/Login/Login"
import { connect } from "react-redux"
import { initializeApp } from "./redux/reducers/appReducer"
import "./styles/App.css"
import Preloader from "./Features/Preloader/Preloader"
import { compose } from "redux"

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialization) {
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
            <Route path='/profile' element={<ProfileContainer />} />
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
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization,
})

export default compose(connect(mapStateToProps, { initializeApp })(App))
