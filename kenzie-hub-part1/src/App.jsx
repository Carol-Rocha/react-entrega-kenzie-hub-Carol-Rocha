import AppRoutes from "./routes/routes"
import Global from "./styles/Global"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
    <Global/>
    <ToastContainer theme="dark"/>
      <div className="App">
        <AppRoutes />
      </div>
    </>
  )
}

export default App
