/* eslint-disable no-debugger */
import ReactDOM from "react-dom/client"

import App from "./App.jsx"
import store from "./redux/redux-store/redux-store.js"
import { BrowserRouter } from "react-router-dom"

import "./styles/reset.css"
import "./styles/fonts.css"

import { Provider } from "react-redux"

let rerenderEntireTree = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
  rerenderEntireTree(store.getState())
})
