import Header from "./components/ui/Header/Header"
import Footer from "./components/ui/Footer/Footer"
import Profile from "./components/ui/Profile/Profile"
import Navbar from "./components/ui/Navbar/Navbar"

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
