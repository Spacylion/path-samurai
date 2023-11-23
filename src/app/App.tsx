import React, {useEffect, useState} from "react"
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom"
import {connect, Provider} from "react-redux"
import {handleGlobalError, initializeApp,} from "./providers/reducers/appReducer"
import store from "./providers/redux-store/redux-store"
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from "antd";
import {UserOutlined, GithubOutlined, NotificationOutlined} from '@ant-design/icons';
import SubMenu from "antd/es/menu/SubMenu";
import Login from '../pages/Login/Login'
import Preloader from "../features/Preloader/Preloader"
import DialogsContainer from '../pages/Dialogs/DialogsContainer'
import ProfileContainer from '../pages/Profile/ProfileContainer'
import UsersContainer from '../pages/Users/UsersContainer'
import Music from '../pages/Music/Music'
import News from "../pages/News/News"
import Settings from '../pages/Settings/Settings'
import "./styles/App.css"
import AppHeader from '../widgets/Header/Header';
import s from "../widgets/Header/Header.module.css";
import logo from "./assets/logo.png"; // Renamed Header to AppHeader

const {Header, Content, Footer, Sider} = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {key, icon, children, label,} as MenuItem;
}

const App: React.FC = ({initializeApp, initialized, handleGlobalError, globalError, isAuth}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

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
        return <Preloader/>;
    }


    const items = [
        {title: 'Home', href: '/'},
        {title: 'List', href: '/list'},
        {title: 'Profile', href: '/profile'}
    ];
    return (
        <Layout>
            <Header>
                <AppHeader/>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    {items.title}
                </Breadcrumb>
                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu mode="inline" style={{height: '100%'}}>
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                <Menu.Item key="1"> <NavLink to="/profile">Profile</NavLink></Menu.Item>
                                <Menu.Item key="2"> <NavLink to="/dialogs">Messages</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<GithubOutlined/>} title="Developers">
                                <Menu.Item key="5"><NavLink to="/users">Developers</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="More">
                                <Menu.Item key="6"><NavLink to="/settings">Settings</NavLink></Menu.Item>
                                <Menu.Item key="7"><NavLink to="/music">Music</NavLink></Menu.Item>
                                <Menu.Item key="8"><NavLink to="/news">News</NavLink></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>

                        <Routes>
                            <Route path='/' element={isAuth ? <Navigate to='/profile'/> : <Navigate to='/login'/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/users' element={<UsersContainer pageTitle={'Users'}/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Routes>

                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>Social Network ©2023 Created by SpacyLion aka Kosach German</Footer>
        </Layout>

    )
}

const mapStateToProps = (state) => (
    {
        initialized: state.app.initialized,
        globalError: state.app.globalError,
    }
)

const AppConnected = connect(mapStateToProps,
    {
        initializeApp,
        handleGlobalError,
    }
)(App)

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


