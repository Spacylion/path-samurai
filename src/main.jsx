import ReactDOM from "react-dom/client"
// import App from "@/app/App"
import store from "@/app/redux/redux-store/redux-store.js"
import "@/app/styles/reset.css"
import "@/app/styles/fonts.css"
import MainApp from "./app/App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainApp store={store} />
)
