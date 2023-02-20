import React from "react"
import { useNavigate } from "react-router-dom"

const Header = ({button}) => {

  const navigate = useNavigate()

  return (
    <header>
      <p>Logo</p>
      <button onClick={() => navigate("/login")} >{button}</button>
    </header>
  )
}

export default Header
