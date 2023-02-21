import React from "react"
import { useNavigate } from "react-router-dom"
import { HeaderStyled } from "./style"
import logoKenzieHub from "../../assets/logoKenzieHub.png"

const Header = ({ button }) => {
  const navigate = useNavigate()

  localStorage.clear

  return (
    <HeaderStyled>
      <img id="logo" src={logoKenzieHub} alt="logo" />
      <button
        id="backButton"
        onClick={
          button === "voltar"
            ? () => navigate("/login")
            : () => {
                localStorage.clear()
                navigate("/login")
              }
        }
      >
        {button}
      </button>
    </HeaderStyled>
  )
}

export default Header
