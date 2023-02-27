import React, { useContext } from "react"
import { createContext } from "react"
import { toast } from "react-toastify"
import { api } from "../../services/api"

const techContext = createContext({})

const TechProvider = ({ children }) => {
  const addTech = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN")
      console.log(token)
      await api.post(`/users/techs`, formData, {
        headers: {
          Authorization: token,
        },
      })
      toast.success("Tecnologia adicionada com sucesso!")
    } catch (error) {
      console.log(error)
    }
  }

  const updateTech = async (id, formData) => {
    try {
      const token = localStorage.getItem("@TOKEN")
      console.log(token)
      await api.put(`/users/techs/${id}`, formData, {
        headers: {
          Authorization: token,
        },
      })
      toast.success("Tecnologia atualizada com sucesso!")
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTech = async (id) => {
    try {
      const token = localStorage.getItem("@TOKEN")
      console.log(token)
      const response = await api.delete(`/users/techs/${id}`, {
        headers:{
          Authorization: token,
        }
      })
      console.log(response.data)
      toast.success("Tecnologia removida com sucesso!")
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const value = { addTech, updateTech, deleteTech }

  return <techContext.Provider value={value}>{children}</techContext.Provider>
}

export const useTechContext = () => {
  const context = useContext(techContext)
  return context
}

export default TechProvider
