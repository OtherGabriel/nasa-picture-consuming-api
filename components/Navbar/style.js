// Your styled components.

import styled from "styled-components";

export const Room = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 15vh;

  padding: 0 10px;
`;   

export const Title = styled.h1`
  background-color: ${ props => props.background ? props.background : "white" };
  color: ${ props => props.color ? props.color : "black" };

  font-size: 3rem;
`;
