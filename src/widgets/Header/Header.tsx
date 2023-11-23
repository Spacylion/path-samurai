import React from "react"
import {NavLink} from "react-router-dom"
import logo from "../../app/assets/logo.png"
import s from "./Header.module.css"
import {Avatar, Button, Col, Flex, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth} from "../../app/providers/selectors/auth-selectors";
import {logout} from "../../app/providers/reducers/authReducer";

export type MapPropsType = {}
export type DispatchPropsType = {
    logout: () => void
}
const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    return (
        <Row>
            <Col span={20}>
                <img className={s.header__image} src={logo} alt=''/>
            </Col>
            <Col span={4}>
                {isAuth ? (
                    <div>
                        <Flex justify={'center'} align={'center'} gap="middle">
                            <Avatar style={{backgroundColor: '#87d068', verticalAlign: 'middle'}} icon={<UserOutlined/>}
                                    size="large"/>
                            <h2>{login}</h2>
                            <Button type='primary' onClick={logoutCallback}>Logout</Button>
                        </Flex>
                    </div>
                ) : (
                    <NavLink to='/login'>
                        <h2>Login</h2>
                    </NavLink>
                )}
            </Col>
        </Row>
    )
}
export default Header
