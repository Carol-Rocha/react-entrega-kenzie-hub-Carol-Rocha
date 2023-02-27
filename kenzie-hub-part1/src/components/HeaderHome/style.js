import styled from "styled-components"

export const HeaderHomeStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  



  #backButton {
    color: var(--color-grey-0);
    font-size: 0.5994rem;

    background-color: var(--color-grey-3);

    padding: 0.5rem 1.5rem;

    border-radius: var(--border-radius-4);
    
    &:hover{
      background-color: var(--color-grey-2);
    }
  }

  #logo {
    width: 97.59px;
    height: 16.9px;
  }
`