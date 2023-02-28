import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerFormSchema } from "./registerFormSchema"
import { InputContainer } from "../../styles/Input"
import Input from "../Input"
import { useUserContext } from "../../context/UserContext"

const RegisterForm = () => {

  const {registerUser} = useUserContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
    registerUser(data)
    reset()
  }

  return (
    <>
      <InputContainer >
        <h3>Crie sua conta</h3>
        <p id="info">Rápido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            type="text"
            placeholde="Digite aqui seu nome"
            register={register("name")}
            error={errors.name}
          />
          <Input
            label="Email"
            type="email"
            placeholde="Digite aqui seu email"
            register={register("email")}
            error={errors.email}
          />
          <Input
            label="Senha"
            type="password"
            placeholde="Digite aqui sua senha"
            register={register("password")}
            error={errors.password}
          />
          <Input
            label="Confirmar Senha"
            type="password"
            placeholde="Digite novamente sua senha"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />
          <Input
            label="Bio"
            type="text"
            placeholde="Fale sobre você"
            register={register("bio")}
            error={errors.bio}
          />
          <Input
            label="Contato"
            type="text"
            placeholde="Opção de contato"
            register={register("contact")}
            error={errors.contacto}
          />
          <label htmlFor="modulo">Selecionar módulo</label>
          <select id="modulo" {...register("course_module")}>
            <option value="">Selecione</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
          </select>
          <button id="buttonRegister" type="submit">Cadastrar</button>
        </form>
      </InputContainer>
    </>
  )
}
export default RegisterForm
