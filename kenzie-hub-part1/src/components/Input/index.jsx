import React from 'react'


 const Input = ({label, type, placeholde, register, error}) => {
  return (
    <>
     <label htmlFor={register.name}>{label}</label>
     <input id={register.name} type={type} placeholder={placeholde} {...register}/>
     {error && <p>{error.message}</p>}
    </>
  )
}
export default Input