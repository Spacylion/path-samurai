import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom" // Import BrowserRouter
import { createRoot } from "react-dom/client"
import MainApp from "./app/App"
import store from "./app/redux/redux-store/redux-store"
import "./app/styles/reset.css"
import "./app/styles/fonts.css"
import { Provider } from "react-redux"

const rootElement = document.getElementById("root")

createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>
)
