import * as yup from "yup"

export const registerFormSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    password: yup.string().required("Senha é obrigatório").min(6, "A senha precisa de no mínimo oito caracteres"),
    confirmPassword: yup.string().required("Confirme sua senha").oneOf([yup.ref("password")]),
    course_module: yup.string().required("Selecione um módulo"),
    
})