/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom"

import Header from "./components/ui/Header/Header"
import Navbar from "./components/ui/Navbar/Navbar"
import Footer from "./components/ui/Footer/Footer"
import Profile from "./components/ui/Profile/Profile"
import News from "./components/ui/News/News"
import Music from "./components/ui/Music/Music"
import Settings from "./components/ui/Settings/Settings"

import "./styles/App.css"
import DialogsContainer from "./components/ui/Dialogs/DialogsContainer"
import UsersContainer from "./components/ui/Users/UsersContainer"

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/profile' element={<Profile />} />
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
