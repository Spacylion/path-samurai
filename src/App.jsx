import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/ui/Header/Header"
import Navbar from "./components/ui/Navbar/Navbar"
import Footer from "./components/ui/Footer/Footer"
import Profile from "./components/ui/Profile/Profile"
import Dialogs from "./components/ui/Diologs/Dialogs"
import News from "./components/ui/News/News"
import Music from "./components/ui/Music/Music"
import Settings from "./components/ui/Settings/Settings"

import "./styles/App.css"

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
