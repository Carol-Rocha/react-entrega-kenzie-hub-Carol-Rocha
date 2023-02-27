import React, { createContext, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../services/api"

const userContext = createContext({})

const UserProvider = ({ children }) => {
  const navigate = useNavigate()

  const token = localStorage.getItem("@TOKEN")

  useEffect(() => {
    if (token) {
      navigate("/dashboard")
    }
  }, [])

  const registerUser = async (formData) => {
    try {
      await api.post("/users", formData)
      toast.success("Conta criada com sucesso!")
    } catch (error) {
      toast.error("Ops! Algo deu errado")
    }
  }

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/sessions", formData)
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
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const value = { registerUser, loginUser, getUser }

  return <userContext.Provider value={value}>{children}</userContext.Provider>
}

export const useUserContext = () => {
  const context = useContext(userContext)
  return context
}

export default UserProvider
