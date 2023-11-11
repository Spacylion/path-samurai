import { Routes, Route, BrowserRouter } from "react-router-dom"
import React, { Suspense } from "react"
import News from "@/pages/News/News"
import Music from "@/pages/Music/Music"
import Settings from "@/pages/Settings/Settings"
import LoginPage from "@/pages/Login/Login"
import HeaderContainer from "@/widgets/Header/HeaderContainer"
import Navbar from "@/widgets/Navbar/Navbar"
import Footer from "@/widgets/Footer/Footer"
import { Provider, connect } from "react-redux"
import { initializeApp } from "./redux/reducers/appReducer"
import "./styles/App.css"
import Preloader from "@/features/preloader/Preloader"
import { compose } from "redux"
import store from "@/app/redux/redux-store/redux-store"
import { withSuspense } from "@/features/with-suspense/with-suspense" // use absolute import for consistency

// lazy imports
const DialogsContainer = React.lazy(() =>
  import("@/pages/Dialogs/DialogsContainer")
)
const ProfileContainer = React.lazy(() =>
  import("@/pages/Profile/ProfileContainer")
)
const UsersContainer = React.lazy(() => import("@/pages/Users/UsersContainer"))

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
            <Route path='/dialogs' element={withSuspense(DialogsContainer)} />
            <Route
              path='/profile/:userId?'
              element={withSuspense(ProfileContainer)}
            />
            <Route path='/users' element={withSuspense(UsersContainer)} />
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
