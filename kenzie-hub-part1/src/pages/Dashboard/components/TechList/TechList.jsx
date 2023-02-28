import React from "react"
import { ListStyle } from "./style"

const TechList = ({ techs, openModal, setTechId }) => {
  return (
    <ListStyle>
      {techs.map((tech) => (
        <li
          key={tech.id}
          onClick={() => {
            setTechId(tech.id)
            openModal(true)
          }}
        >
          <p>{tech.title}</p>
          <span>{tech.status}</span>
        </li>
      ))}
    </ListStyle>
  )
}
export default TechList
