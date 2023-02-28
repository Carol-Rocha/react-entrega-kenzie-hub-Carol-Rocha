import styled from "styled-components"

export const HeaderHomeStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 1rem;

  #backButton {
    color: var(--color-grey-0);
    font-size: var(--font-size-12);

    background-color: var(--color-grey-3);

    padding: 0.5rem 1.2rem;

    border-radius: var(--border-radius-4);

    &:hover {
      background-color: var(--color-grey-2);
    }
  }

  #logo {
    width: 97.59px;
    height: 16.9px;
  }
`
