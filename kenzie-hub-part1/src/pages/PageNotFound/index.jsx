import React from "react"
import { DivPageNotFound } from "./style"
import robot from "../../assets/robot.png"

const PageNotFound = () => {
  return (
    <DivPageNotFound>
      <div className="container">
        <h1>404</h1>
        <img src={robot} alt="robot" />
        <p>Opss! Página não encontrada...</p>
      </div>
    </DivPageNotFound>
  )
}
export default PageNotFound
