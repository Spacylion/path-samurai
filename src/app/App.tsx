import React, {useEffect, useState} from "react"
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom"
import News from "../pages/News/News"
import Music from "../pages/Music/Music"
import Settings from "../pages/Settings/Settings"
import DialogsContainer from "../pages/Dialogs/DialogsContainer"
import UsersContainer from "../pages/Users/UsersContainer"
import ProfileContainer from "../pages/Profile/ProfileContainer"
import LoginPage from "../pages/Login/Login"
import HeaderContainer from "../widgets/Header/HeaderContainer"
import Navbar from "../widgets/Navbar/Navbar"
import {Footer as FooterComponent} from "../widgets/Footer/Footer"
import {connect, Provider} from "react-redux"
import {handleGlobalError, initializeApp,} from "./providers/reducers/appReducer"
import "./styles/App.css"
import Preloader from "../features/Preloader/Preloader"
import store from "./providers/redux-store/redux-store"
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from "antd";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';
import s from "../widgets/Navbar/Navbar.module.css";

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

const items: MenuItem[] = [
    getItem('Profile', 'sub1', <UserOutlined/>, [
        getItem('Edit profile', '3'),
        getItem('Update status', '4'),
        getItem('Logout', '5'),

    ]),
    getItem('Developers', '1', <PieChartOutlined/>),
    getItem('Posts', '2', <DesktopOutlined/>),
    getItem('News', 'sub2', <TeamOutlined/>, [getItem('Trends', '6'), getItem('About', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];


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

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}>
                    <Menu.Item>

                    </Menu.Item>

                </Menu>
                <Link to='/profile'>Profile</Link>,
                <Link to='/users'>Users</Link>,
                <Link to='/dialogs'>Messages</Link>,
            </Sider>
            <Navbar/>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <HeaderContainer/>
                </Header>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                        {globalError && (
                            <div>
                                <p>{globalError}</p>
                            </div>
                        )}
                        <Routes>
                            <Route path='/' element={isAuth ? <Navigate to='/profile'/> : <Navigate to='/login'/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/users' element={<UsersContainer pageTitle={'Users'}/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    <Footer/>
                </Footer>
            </Layout>
        </Layout>
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
