import React from "react"
import Header from "../../components/Header"
import RegisterForm from "../../components/RegisterForm"
import { PageRegister } from "./style"


const Register = () => {
  return (
    <PageRegister>
      <Header button="Voltar" />
      <RegisterForm />
    </PageRegister>
  )
}
export default Register
