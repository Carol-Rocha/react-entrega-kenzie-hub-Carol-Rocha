import React from "react"
import Header from "../../components/Header"
import RegisterForm from "../../components/RegisterForm"

const Register = ({registerUser}) => {
  return (
    <>
      <Header button="Voltar" />
      <RegisterForm registerUser={registerUser} />
    </>
  )
}
export default Register
