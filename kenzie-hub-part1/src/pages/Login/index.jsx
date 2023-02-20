import React from "react"
import LoginForm from "../../components/LoginForm"
import logoKenzieHub from "../../assets/logoKenzieHub.png"
import { PageLogin } from "./style"

const Login = ({ loginUser }) => {
  return (
    <PageLogin>
      <img id="logo" src={logoKenzieHub} alt="logo" />
      <LoginForm loginUser={loginUser} />
    </PageLogin>
  )
}
export default Login
