import React from "react"
import preloader from "@/app/assets/loading.svg"
import {Flex} from "antd";

let Preloader = (props) => {
    return (
        <Flex justify='center' align='center' style={{height: '100%'}}>
            < img src={preloader}/>
        </Flex>
    )
}

export default Preloader
