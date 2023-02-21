import styled from "styled-components"

export const InputContainer = styled.div`
  background-color: var(--color-grey-3);

  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 369px;

  padding: 34px 18px;

  gap: 1rem;

  border-radius: var(--border-radius-4);

  h3 {
    color: var(--color-grey-0);

    font-size: var(--font-size-14-44);
    font-weight: var(--font-weight-700);

    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
  }

  label {
    color: var(--color-grey-0);

    font-size: var(--font-size-9-77);
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

  .inputLoginPassword {
    border: none;
  }

  .sectionInput {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-right: 0.8125rem;

    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-0);
    border-radius: 3.21px;
  }

  img {
    width: 15.23px;
    height: 11.65px;

    cursor: pointer;
  }

  button {
    padding: 0.6rem;

    border-radius: var(--border-radius-4);

    font-weight: var(--font-weight-500);
    font-size: var(--font-size-12-83);
  }

  .bttn_login {
    background-color: var(--color-primary);

    color: var(--color-white);

    &:hover {
      background-color: var(--color-primary-focus);
    }
  }

  .bttn_register {
    color: var(--color-grey-0);

    background-color: var(--color-grey-1);

    &:hover {
      background-color: var(--color-grey-2);
    }
  }

  p {
    color: var(--color-grey-1);

    font-size: 0.6019rem;
    font-weight: var(--font-weight-600);
  }

  #messageToRegister {
    text-align: center;

    margin-top: 0.7rem;
  }

  #info {
    text-align: center;
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

  #buttonRegister {
    background-color: var(--color-primary-negative);

    color: var(--color-white);

    font-size: 0.7994rem;
    font-weight: var(--font-weight-500);

    &:hover {
      background-color: var(--color-primary);
    }
  }
`
