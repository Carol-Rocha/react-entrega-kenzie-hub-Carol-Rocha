import React from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import LoginForm from "../pages/Login"
import RegisterForm from "../pages/Register"
import { api } from "../services/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import PageNotFound from "../pages/PageNotFound"
import Dashboard from "../pages/Dashboard"

const AppRoutes = () => {
  const navigate = useNavigate()

  const registerUser = async (formData) => {
    try {
      const response = await api.post("/users", formData)
      console.log(response.data)
      toast.success("Conta criada com sucesso!")
    } catch (error) {
      toast.error("Ops! Algo deu errado")
    }
  }

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/sessions", formData)
      console.log(response.data)
      localStorage.setItem("@TOKEN", response.data.token)
      localStorage.setItem("@USERID", response.data.user.id)
      navigate("/dashboard")
    } catch (error) {
      toast.error("Email e/ou senha incorretos!")
    }
  }

  const getUser = async (id) => {
    try {
      const response = await api.get(`/users/${id}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Routes>
      <Route index path="/" element={<LoginForm loginUser={loginUser} />} />
      <Route
        index
        path="/login"
        element={<LoginForm loginUser={loginUser} />}
      />
      <Route
        path="/register"
        element={<RegisterForm registerUser={registerUser} />}
      />
      <Route path="/dashboard" element={<Dashboard getUser={getUser} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
