import * as serviceWorker from "./serviceWorker"
import React from "react"
import ReactDOM from "react-dom/client"
import "@/app/styles/reset.css"
import "@/app/styles/fonts.css"
import MainApp from "./app/App"

ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />)
