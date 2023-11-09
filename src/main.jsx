/* eslint-disable no-debugger */
import ReactDOM from "react-dom/client"

import App from "./App.jsx"
import store from "./redux/redux-store/redux-store.js"

import "./styles/reset.css"
import "./styles/fonts.css"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </BrowserRouter>
)
