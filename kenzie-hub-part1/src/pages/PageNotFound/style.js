import styled from "styled-components"

export const DivPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 323px;

  height: 100vh;
  gap: 2rem;

  background-color: var(--color-grey-4);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    width: 90%;
    max-width: 389px;

    padding: 3rem;
    background-color: var(--color-grey-3);

    border-radius: var(--border-radius-4);
  }

  img {
    height: 80px;
    width: 80px;
  }

  h1,
  p {
    color: var(--color-grey-0);
    text-align: center;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: var(--font-weight-700);
  }
`
