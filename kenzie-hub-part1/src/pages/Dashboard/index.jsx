import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import HeaderHome from "../../components/HeaderHome"
import { useUserContext } from "../../context/UserContext"
import Modal from "./components/Modal/Modal"
import TechList from "./components/TechList/TechList"
import { DashboardContainer } from "./style"

const Dashboard = () => {
  const { getUser } = useUserContext()

  const [open, setOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [techId, setTechId] = useState("")
  const [refetch, setRefetch] = useState(false)

  const navigate = useNavigate()

  const token = localStorage.getItem("@TOKEN")

  const openModal = (edit = false) => {
    if (edit) {
      setIsEdit(true)
    }
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
    setIsEdit(false)
  }

  const [user, setUser] = useState()
  const userId = localStorage.getItem("@USERID")

  useEffect(() => {
    if (!token) {
      navigate("/")
    } 
  }, [])

  useEffect(() => {
    if(token){
      getUser(userId).then(setUser)
    }
  }, [refetch])

  return (
    <>
      <DashboardContainer>
        <HeaderHome button="Sair" />
        <div className="userInformation">
          <h1>
            Olá,  <span className="userName">{user?.name}</span>
          </h1>
          <span id="userModule">{user?.course_module}</span>
        </div>
        <div className="containerAddTech">
          <p>Tecnologias</p>
          <button id="addButton" onClick={() => openModal()}>+</button>
        </div>
        {user && (
          <TechList
            setTechId={setTechId}
            techs={user.techs}
            openModal={openModal}
          />
        )}
        <Modal
          techId={techId}
          open={open}
          setRefetch={setRefetch}
          isEdit={isEdit}
          closeModal={closeModal}
        />
      </DashboardContainer>
    </>
  )
}
export default Dashboard
