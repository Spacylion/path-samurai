import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App.jsx"
import state from "./redux/state.js"
import { addPost } from "./redux/state.js"
import { BrowserRouter } from "react-router-dom"

import "./styles/reset.css"
import "./styles/fonts.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>
)
