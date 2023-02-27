import * as yup from "yup"

export const modalFormSchema = yup.object().shape({
  title: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Status é obrigatório"),
})
