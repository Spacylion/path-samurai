/* eslint-disable no-debugger */
import ReactDOM from "react-dom/client"

import App from "./App.jsx"
import store from "./redux/redux-store/redux-store.js"
import { BrowserRouter } from "react-router-dom"

import "./styles/reset.css"
import "./styles/fonts.css"

let rerenderEntireTree = (state) => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>
  )
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree()
})
