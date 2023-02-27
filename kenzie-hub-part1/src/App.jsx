import AppRoutes from "./routes/routes"
import Global from "./styles/Global"
import { ToastContainer } from "react-toastify"
import UserProvider from "./context/UserContext"
import TechProvider from "./context/TechContext"


function App() {


  return (
    <>
      <Global />
      <ToastContainer theme="dark" />
      <div className="App">
        <TechProvider>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </TechProvider>
      </div>
    </>
  )
}

export default App
