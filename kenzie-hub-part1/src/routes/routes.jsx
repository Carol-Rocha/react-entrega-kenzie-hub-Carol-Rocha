import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginForm from "../pages/Login"
import RegisterForm from "../pages/Register"
import { api } from "../services/api"

const AppRoutes = () => {

  const registerUser = async (formData) => {
    try {
      const response = await api.post('/users', formData)
      console.log(response.data)
      alert('cadastrado minha colega (NÃO ESQUEÇA DO TOAST)')
    } catch (error) {
      console.log(error)
    }
  }

  const loginUser = async (formData) => {
    try {
      const response = await api.post('/sessions', formData)
      console.log(response.data)
      alert('entrou mona LOGIN (NÃO ESQUEÇA DO TOAST)')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Routes>
        <Route index path="/" element={<LoginForm loginUser={loginUser} />} />
        <Route index path="/login" element={<LoginForm loginUser={loginUser} />} />
        <Route path="/register" element={<RegisterForm registerUser={registerUser}  />} />
        <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default AppRoutes
