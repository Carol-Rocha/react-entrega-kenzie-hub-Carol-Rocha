import React from "react"
import Header from "../../components/Header"
import RegisterForm from "../../components/RegisterForm"
import { PageRegister } from "./style"


const Register = ({registerUser}) => {
  return (
    <PageRegister>
      <Header button="Voltar" />
      <RegisterForm registerUser={registerUser} />
    </PageRegister>
  )
}
export default Register
