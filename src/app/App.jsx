import { useEffect } from "react"
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useParams,
  useNavigate, // Импортируем useNavigate вместо useHistory
} from "react-router-dom"
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

const App = ({ initializeApp, initialized }) => {
  const navigate = useNavigate() // Заменяем useHistory на useNavigate

  useEffect(() => {
    initializeApp()
  }, [initializeApp])

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          {/* <Route path='/' element={<Navigate to='/profile' />} /> */}
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

const AppConnected = connect(mapStateToProps, { initializeApp })(App)

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppConnected />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp
