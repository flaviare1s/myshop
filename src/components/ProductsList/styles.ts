import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  justify-content: center;
  justify-items: start;
  gap: 2rem;

  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: 4rem auto;
  padding: 0 2rem;

  & > * {
    width: 100%;
  }
`;
