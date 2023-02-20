import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}


:root{
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;

  --color-sucess: #3FE864;
  --color-negative: #E83F5B;

    
  --color-grey-4:#121214;
  --color-grey-3:#212529;
  --color-grey-2:#343B41;
  --color-grey-1:#868E96;
  --color-grey-0:#F8F9FA;
  --color-white:#FFFFFF;
   
  --font-size-9-77: 0.6106rem;
  --font-size-10: 0.625rem;
  --font-size-12: 0.75rem;
  --font-size-12-83: 0.8019rem;
  --font-size-14: 0.875rem;
  --font-size-14-44: 0.9025rem;
  --font-size-16: 1rem;
  --font-size-18: 1.125rem;
  --font-size-20: 1.25rem;
  --font-size-22: 1.375rem;
  --font-size-24: 1.5rem;
  --font-size-26: 1.625rem;
  --font-size-38: 2.375rem;

  --font-weight-400: 400;
  --font-weight-500: 500;
  --font-weight-600: 600;
  --font-weight-700: 700;
  --font-weight-800: 800;
  
  --border-radius-4: 4px;
  --border-radius-5: 5px;
  --border-radius-8: 8px;
}

button{
    cursor: pointer;
    border: none;
}

body{
    font-family: 'Inter', sans-serif;
}

`
