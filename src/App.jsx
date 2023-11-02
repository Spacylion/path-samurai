/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/ui/Navbar/Navbar"
import Footer from "./components/ui/Footer/Footer"
import News from "./components/ui/News/News"
import Music from "./components/ui/Music/Music"
import Settings from "./components/ui/Settings/Settings"

import "./styles/App.css"
import DialogsContainer from "./components/ui/Dialogs/DialogsContainer"
import UsersContainer from "./components/ui/Users/UsersContainer"
import ProfileContainer from "./components/ui/Profile/ProfileContainer"
import HeaderContainer from "./components/ui/Header/HeaderContainer"

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/profile' element={<ProfileContainer />} />
          {/* userId = comes from useParams */}
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

export default App
