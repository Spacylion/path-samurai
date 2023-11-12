import * as serviceWorker from "./serviceWorker"
import React from "react"
import ReactDOM from "react-dom"
import "@/app/styles/reset.css"
import "@/app/styles/fonts.css"
import MainApp from "./app/App"

ReactDOM.render(<MainApp />, document.getElementById("root"))
