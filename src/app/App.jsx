import React, {useEffect} from "react"
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import News from "../pages/News/News"
import Music from "../pages/Music/Music"
import Settings from "../pages/Settings/Settings"
import DialogsContainer from "../pages/Dialogs/DialogsContainer"
import UsersContainer from "../pages/Users/UsersContainer"
import ProfileContainer from "../pages/Profile/ProfileContainer"
import LoginPage from "../pages/Login/Login"
import HeaderContainer from "../widgets/Header/HeaderContainer"
import Navbar from "../widgets/Navbar/Navbar"
import Footer from "../widgets/Footer/Footer"
import {Provider, connect} from "react-redux"
import {initializeApp, handleGlobalError,} from "./providers/reducers/appReducer.ts"
import "./styles/App.css"
import Preloader from "../features/Preloader/Preloader"
import store from "./providers/redux-store/redux-store"

const App = ({ initializeApp, initialized, handleGlobalError, globalError, isAuth }) => {
    useEffect(() => {
        initializeApp();
        const catchAllUnhandledErrors = (event) => {
            handleGlobalError(event);
        };
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors);

        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
        };
    }, [handleGlobalError, initializeApp]);

    if (!initialized) {
        return <Preloader />;
    }

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {globalError && (
                    <div>
                        <p>{globalError}</p>
                    </div>
                )}
                <Routes>
                    <Route path='/' element={isAuth ? <Navigate to='/profile' /> : <Navigate to='/login' />} />

                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                    <Route path='/users' element={<UsersContainer pageTitle={'Users'}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError,
})

const AppConnected = connect(mapStateToProps, {
    initializeApp,
    handleGlobalError,
})(App)

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppConnected/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
