import styled from "styled-components"

export const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  background-color: var(--color-grey-3);
  border-radius: var(--border-radius-4);

  padding: 1.8rem .6rem;

  overflow-y: auto;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 1rem 0.7rem;

    background-color: var(--color-grey-4);
    border-radius: var(--border-radius-4);

    cursor: pointer;

    &:hover {
      background-color: var(--color-grey-2);
    }
  }

  p {
    color: var(--color-grey-0);
    font-size: 0.8881rem;
    font-weight: var(--font-weight-700);
  }

  span {
    color: var(--color-grey-1);
    font-size: 0.7612rem;
    font-weight: var(--font-weight-400);
  }

  
`
