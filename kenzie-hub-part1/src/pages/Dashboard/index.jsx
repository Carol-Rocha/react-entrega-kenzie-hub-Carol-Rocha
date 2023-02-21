import React, { useEffect, useState } from "react"
import Header from "../../components/Header"
import { DashboardContainer } from "./style"

const Dashboard = ({ getUser }) => {
  const [user, setUser] = useState()
  const userId = localStorage.getItem("@USERID")
  console.log(userId)
  useEffect(() => {
    getUser(userId).then(setUser)
  }, [])

  return (
    <>
      <DashboardContainer>
        <Header button="Sair" />
        <div className="userInformation">
          <h1>
            Olá, <span>{user?.name}</span>
          </h1>
          <span id="userModule">{user?.course_module}</span>
        </div>
        <section>
          <h3>Que pena! Estamos em desenvolvimento :( </h3>
          <p>
            Nossa aplicação está desenvolvimento, em breve teremos novidades
          </p>
        </section>
      </DashboardContainer>
    </>
  )
}
export default Dashboard
