import styled from "styled-components";

export const DashboardContainer = styled.div`

background-color: var(--color-grey-4);
height: 100vh;

display: flex;
flex-direction: column;
gap: 1rem;

align-items: center;

.userInformation, section{
    display: flex;
    flex-direction: column;

    border-top: 1px solid var(--color-grey-3);


    width: 100%;

    
}

h1, h3{
  color: var(--color-grey-0); 

  font-size: var(--font-size-18);
  font-weight: var(--font-weight-700);
}

#userModule{
    color: var(--color-grey-1);

    font-size: var(--font-size-12);
    font-weight: var(--font-weight-400);
}

p{
  color: var(--color-white);

  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
}


`