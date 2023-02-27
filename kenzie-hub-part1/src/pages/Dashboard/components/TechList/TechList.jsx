import React from "react"

const TechList = ({ techs, openModal, setTechId }) => {
  return (
    <ul>
      {techs.map((tech) => (
        <li
          onClick={() => {
            setTechId(tech.id)
            openModal(true)
          }}
        >
          <p>{tech.title}</p>
          <span>{tech.status}</span>
        </li>
      ))}
    </ul>
  )
}
export default TechList
