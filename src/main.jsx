import React from "react"
import * as serviceWorker from "./serviceWorker"
import { createRoot } from "react-dom/client"
import MainApp from "./app/App"
import "@/app/styles/reset.css"
import "@/app/styles/fonts.css"

createRoot(document.getElementById("root")).render(<MainApp />)
serviceWorker.unregister()
