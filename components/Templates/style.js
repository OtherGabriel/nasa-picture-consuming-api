import styled from "styled-components";

export const FormTemplate = styled.form``;

export const FormDivTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: ${ props => props.margin };
`;

export const InputTemplate = styled.input`
  padding: 15px 5px;

  text-align: ${ props => props.align };

  width: ${ props => props.width };
  height: ${ props => props.height };

  font-family: "Courier New", Courier, monospace;
`;

export const ButtonTemplate = styled.button`
  cursor: pointer;
`;

export const ProjectTitle = styled.h1`
  background-color: ${ props => props.background ? props.background : "white" };
  color: ${ props => props.color ? props.color : "black" };

  font-size: ${ props => props.size ? props.size : "2rem" };
`;

export const ProjectText = styled.p`
  background-color: ${ props => props.background ? props.background : "white" };
  color: ${ props => props.color ? props.color : "black" };

  font-size: ${ props => props.size ? props.size : "1rem" };

  font-family: ${ props => props.family ? props.family : "'Courier New', Courier, monospace" };
  font-weight: ${ props => props.weight ? props.weight : "none" };
`;

export const Room = styled.div`
  display: ${ props => props.display };
  flex-direction: ${ props => props.direction };
  align-items: ${ props => props.align };
  justify-content: ${ props => props.justify };

  width: ${ props => props.width };
  height: ${ props => props.height };

  margin: ${ props => props.margin };
`;
