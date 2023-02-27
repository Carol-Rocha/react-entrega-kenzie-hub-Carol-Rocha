import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginForm from "../pages/Login"
import RegisterForm from "../pages/Register"
import "react-toastify/dist/ReactToastify.min.css"
import PageNotFound from "../pages/PageNotFound"
import Dashboard from "../pages/Dashboard"

const AppRoutes = () => {


  return (
    <Routes>
      <Route index path="/" element={<LoginForm />} />
      <Route index path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
