import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { modalFormSchema, modalFormEditSchema } from "./modalFormSchema"
import close from "../../../../assets/X.png"
import { useTechContext } from "../../../../context/TechContext"
import { BackgroundModalStyled } from "./style"

const Modal = ({ isEdit, open, closeModal, techId, setTechId, setRefetch, techName, setTechName }) => {
  const { addTech, updateTech, deleteTech } = useTechContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(isEdit ? modalFormEditSchema : modalFormSchema),
  })

  const handleDeleteTech = async () => {
    await deleteTech(techId)
    setTechId('')
    setTechName('')
    closeModal()
    setRefetch((prevState) => !prevState)
  }

  const onSubmit = async (data) => {
    if (isEdit) {
      await updateTech(techId, data)
      console.log(data)
    } else {
      await addTech(data)
      console.log(data)
    }
    setTechId('')
    setTechName('')
    setRefetch((prevState) => !prevState)
    reset()
    closeModal()
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
              <input
                id="title"
                type="text"
                disabled={isEdit}
                defaultValue={techName ? techName : ""}
                placeholder={techName ? techName : ""}
                {...register("title")}
              />
              {errors.title && (
                <p className="errorMessage">{errors.title.message}</p>
              )}
              <label htmlFor="status">Selecionar status</label>
              <select id="status" {...register("status")}>
                <option value="">Selecionar </option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              {errors.status && (
                <p className="errorMessage">{errors.status.message}</p>
              )}
              <div>
                {isEdit ? (
                  <div className="buttonsModal">
                    <button id="changeButton" type="submit">
                      Salvar alterações
                    </button>
                    <button
                      id="deleteButton"
                      type="button"
                      onClick={handleDeleteTech}
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
