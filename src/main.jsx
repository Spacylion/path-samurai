import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom"
import MainApp from "./app/App"
import store from "./app/redux/redux-store/redux-store"
import "./app/styles/reset.css"
import "./app/styles/fonts.css"

const rootElement = document.getElementById("root")

createRoot(rootElement).render(<MainApp store={store} />)
