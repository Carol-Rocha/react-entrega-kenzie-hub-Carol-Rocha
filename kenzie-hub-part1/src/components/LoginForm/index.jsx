import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { loginFormSchema } from "./loginFormSchema"
import visualizar from "../../assets/visualizar.png"
import { InputContainer } from "../../styles/Input"
import Input from "../Input"
import { useUserContext } from "../../context/UserContext"

const LoginForm = () => {
  const { loginUser } = useUserContext()

  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  })

  const onSubmitFunction = (data) => {
    loginUser(data)
    reset()
  }

  return (
    <InputContainer>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Email"
          type="email"
          placeholde="Digite seu email"
          register={register("email")}
          error={errors.email}
        />

        <label htmlFor="password">Senha</label>
        <div className="sectionInput">
          <input
            id="password"
            className="inputLoginPassword"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <img src={visualizar} alt="visualizar" />
        </div>
        {errors.password && <p>{errors.password.message}</p>}
        <button className="bttn_login" type="submit">
          Entrar
        </button>
      </form>
      <p id="messageToRegister">Ainda não possui uma conta?</p>
      <button className="bttn_register" onClick={() => navigate("/register")}>
        Cadastre-se
      </button>
    </InputContainer>
  )
}
export default LoginForm
