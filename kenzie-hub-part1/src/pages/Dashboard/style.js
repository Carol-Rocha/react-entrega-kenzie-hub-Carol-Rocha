import styled from "styled-components"

export const DashboardContainer = styled.div`
  background-color: var(--color-grey-4);

  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  padding-bottom: 5rem;

  gap: 1rem;



  .userInformation,
  section {
    display: flex;
    flex-direction: column;

    border-top: 1px solid var(--color-grey-3);
    border-bottom: 1px solid var(--color-grey-3);

    padding: 2rem 0;

    gap: 1rem;

    width: 100%;
  }

  .containerAddTech {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #addButton {
    color: var(--color-white);
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-700);

    padding: 0.4rem 0.8rem;

    background-color: var(--color-grey-3);
    border-radius: var(--border-radius-4);
  }

  h1,
  h3 {
    color: var(--color-grey-0);

    font-size: var(--font-size-18);
    font-weight: var(--font-weight-700);
  }

  .userName {
    text-transform: capitalize;
  }

  #userModule {
    color: var(--color-grey-1);

    font-size: var(--font-size-12);
    font-weight: var(--font-weight-400);
  }

  p {
    color: var(--color-white);

    font-size: var(--font-size-16);
    font-weight: var(--font-weight-400);
  }

@media (min-width:1000px) {
  padding: 0% 20%;

  
  padding-bottom: 1rem;
}
`
