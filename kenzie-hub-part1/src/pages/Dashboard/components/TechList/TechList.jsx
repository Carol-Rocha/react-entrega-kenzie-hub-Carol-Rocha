import React from "react"
import { ListStyle } from "./style"

const TechList = ({ techs, openModal, setTechId, setTechName }) => {
  return (
    <ListStyle>
      {techs.map((tech) => (
        <li
          key={tech.id}
          onClick={() => {
            setTechId(tech.id)
            setTechName(tech.title)
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
