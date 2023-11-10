import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/app/App"
import store from "@/app/redux/redux-store/redux-store.js"
import "@/app/styles/reset.css"
import "@/app/styles/fonts.css"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
