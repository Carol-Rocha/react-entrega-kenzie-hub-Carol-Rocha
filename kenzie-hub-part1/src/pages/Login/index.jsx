import React from "react"
import LoginForm from "../../components/LoginForm"
import logoKenzieHub from "../../assets/logoKenzieHub.png"
import { PageLogin } from "./style"

const Login = () => {
  return (
    <PageLogin>
      <img id="logo" src={logoKenzieHub} alt="logo" />
      <LoginForm  />
    </PageLogin>
  )
}
export default Login
