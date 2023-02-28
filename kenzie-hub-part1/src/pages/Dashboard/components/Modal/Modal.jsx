import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { modalFormSchema } from "./modalFormSchema"
import close from "../../../../assets/X.png"
import { useTechContext } from "../../../../context/TechContext"
import { BackgroundModalStyled } from "./style"
import { InputContainer } from "../../../../styles/Input"

const Modal = ({ isEdit, open, closeModal, techId, setRefetch }) => {
  const { addTech, updateTech, deleteTech} = useTechContext()
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(modalFormSchema),
  })

  const onSubmit = (data) => {
    if (isEdit) {
      updateTech(techId, data)
      console.log(data)
    } else {
      addTech(data)
      console.log(data)
    }
    setRefetch((prevState) => !prevState)
    reset()
  }

  return (
    <>
      {open && (
        <BackgroundModalStyled open>
          <div className="modalContainer">
            <div id="titleInformation">
              <h4>{isEdit ? "Tecnologia Detalhe" : "Cadastrar tecnologia"}</h4>
              <img onClick={closeModal} src={close} alt="close" />
            </div>
            <form id="formModal" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="title">Nome</label>
              <input id="title" type="text" {...register("title")} />
              {errors.title && <p className="errorMessage">{errors.title.message}</p>}
              <label htmlFor="status">Selecionar status</label>
              <select id="status" {...register("status")}>
                <option value="">Selecionar </option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              {errors.status && <p className="errorMessage">{errors.status.message}</p>}
              <div>
                {isEdit ? (
                  <div className="buttonsModal">
                    <button id="changeButton" type="submit">
                      Salvar alterações
                    </button>
                    <button
                      id="deleteButton"
                      type="button"
                      onClick={() => deleteTech(techId)}
                    >
                      Excluir
                    </button>
                  </div>
                ) : (
                  <button id="registerTech" type="submit">
                    Cadastrar tecnologia
                  </button>
                )}
              </div>
            </form>
          </div>
        </BackgroundModalStyled>
      )}
    </>
  )
}
export default Modal
