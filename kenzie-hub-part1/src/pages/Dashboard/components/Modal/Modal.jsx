import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { modalFormSchema } from "./modalFormSchema"
import close from "../../../../assets/X.png"
import { useTechContext } from "../../../../context/TechContext"

const Modal = ({ isEdit , open, closeModal, techId }) => {

  
  const { addTech, updateTech, deleteTech, setRefetch} = useTechContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(modalFormSchema),
  })

  const onSubmit = (data) => {
    if(isEdit){

      updateTech(techId, data)

    }else{
      addTech(data)
    }
    setRefetch(prevState => !prevState)
    reset()
  }

  return (
    <>
      {open && (
        <dialog open>
          <div>
            <h4>{isEdit ? "Tecnologia Detalhe" : "Cadastrar tecnologia"}</h4>
            <img onClick={closeModal} src={close} alt="close" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="title">Nome</label>
              <input id="title" type="text" {...register("title")} />
              {errors.title && <p>{errors.title.message}</p>}
              <label htmlFor="status">Selecionar status</label>
              <select id="status" {...register("status")}>
                <option value="">Selecionar </option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              {errors.status && <p>{errors.status.message}</p>}
              <div>
                {isEdit ? (
                  <>
                    <button type="submit">Salvar alterações</button>
                    <button type="button" onClick={() => deleteTech(techId)} >Excluir</button>
                  </>
                ) : (
                  <button type="submit">Cadastrar tecnologia</button>
                )}
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  )
}
export default Modal
