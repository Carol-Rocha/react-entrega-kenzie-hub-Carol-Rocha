import styled from "styled-components"

export const BackgroundModalStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;

  .modalContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: var(--color-grey-3);

    display: flex;
    flex-direction: column;

    width: 90%;
    max-width: 369px;

    gap: 1rem;

    border-radius: var(--border-radius-4);
  }

  #titleInformation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px;

    border-radius: var(--border-radius-4) var(--border-radius-4) 0 0;
    background-color: var(--color-grey-2);
  }

  #formModal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 18px;

    gap: 1rem;
  }

  label {
    color: var(--color-grey-0);

    font-size: 0.7612rem;
    font-weight: var(--font-weight-400);
  }

  input {
    background-color: var(--color-grey-2);

    border: 1px solid var(--color-grey-0);
    border-radius: 3.21px;

    padding: 0.5rem 0.8125rem;

    outline: none;

    color: var(--color-grey-0);
    font-size: 0.8144rem;

    &::placeholder {
      color: var(--color-grey-1);
      font-size: var(--font-size-12-83);
    }
  }

  h4 {
    text-align: start;

    color: var(--color-grey-0);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-700);
  }

  img {
    width: 15.23px;
    height: 11.65px;

    cursor: pointer;
  }

  .errorMessage {
    color: var(--color-grey-1);

    font-size: 0.6019rem;
    font-weight: var(--font-weight-600);
  }

  select {
    background-color: var(--color-grey-2);

    border: 1px solid var(--color-grey-0);
    border-radius: 3.21px;

    padding: 0.5rem 0.8125rem;

    outline: none;

    color: var(--color-grey-1);
    font-size: 0.8144rem;

    cursor: pointer;
  }

  button {
    padding: 0.6rem;

    border-radius: var(--border-radius-4);

    color: var(--color-white);

    font-size: var(--font-size-14-44);
    font-weight: var(--font-weight-500);
  }

  #registerTech {
    width: 100%;

    color: var(--color-white);

    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-primary-focus);
    }
  }

  .buttonsModal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #changeButton {
    background-color: var(--color-primary-negative);
    width: 60%;

    &:hover {
      background-color: var(--color-primary-focus);
    }
  }

  #deleteButton {
    background-color: var(--color-grey-1);
    width: 30%;

    &:hover {
      background-color: var(--toastify-color-dark);
    }

    &:focus {
      background-color: var(--color-primary-focus);
    }
  }
`
