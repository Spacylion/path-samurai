import ReactDOM from "react-dom/client"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import React from "react"
import News from "../pages/News/News"
import Music from "../pages/Music/Music"
import Settings from "../pages/Settings/Settings"
import DialogsContainer from "../pages/Dialogs/DialogsContainer"
import UsersContainer from "../pages/Users/UsersContainer"
import ProfileContainer from "../pages/Profile/ProfileContainer"
import LoginPage from "../pages/Login/Login"
import HeaderContainer from "@/widgets/Header/HeaderContainer"
import Navbar from "../widgets/Navbar/Navbar"
import Footer from "../widgets/Footer/Footer"
import { Provider, connect } from "react-redux"
import { initializeApp } from "./redux/reducers/appReducer"
import "./styles/App.css"
import Preloader from "../features/Preloader/Preloader"
import store from "./redux/redux-store/redux-store"
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
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization,
})

let AppContainer = compose(connect(mapStateToProps, { initializeApp })(App))

let MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer store={store} />
      </Provider>
    </BrowserRouter>
  )
}
export default MainApp
