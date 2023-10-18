import Header from "./components/ui/Header"
import Footer from "./components/ui/Footer"
import Profile from "./components/ui/Profile"
import Navbar from "./components/ui/Navbar"

import "./styles/App.css"

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  )
}

export default App
