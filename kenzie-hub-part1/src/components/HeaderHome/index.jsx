import React from "react"
import { useNavigate } from "react-router-dom"
import { HeaderHomeStyled} from "./style"
import logoKenzieHub from "../../assets/logoKenzieHub.png"

const HeaderHome = ({ button }) => {
  const navigate = useNavigate()

  localStorage.clear

  return (
    <HeaderHomeStyled>
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
    </HeaderHomeStyled>
  )
}

export default HeaderHome