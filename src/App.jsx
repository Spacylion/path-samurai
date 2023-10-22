/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom"

import Header from "./components/ui/Header/Header"
import Navbar from "./components/ui/Navbar/Navbar"
import Footer from "./components/ui/Footer/Footer"
import Profile from "./components/ui/Profile/Profile"
import Dialogs from "./components/ui/Dialogs/Dialogs"
import News from "./components/ui/News/News"
import Music from "./components/ui/Music/Music"
import Settings from "./components/ui/Settings/Settings"

import "./styles/App.css"

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.friendsPage} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route
            path='/dialogs'
            element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path='/profile'
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
              />
            }
          />
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
