import React from "react"
import {Button, Flex} from "antd";
import {Navigator} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <Flex>
                <h1>404 NOT FOUND</h1>
            </Flex>
            <Flex>
                <Navigator to={'/'}>
                    <Button>
                        Back to main
                    </Button>
                </Navigator>
            </Flex>
        </div>
    )
}

export default Navbar
