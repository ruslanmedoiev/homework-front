import { css, styled } from "styled-components";
import { Container } from "./Container.styled";

type CardPropsType = {
  width?: string;
  background?: string;
  rounded?: boolean;
  border?: {
    sm: boolean;
    md: boolean;
    lg: boolean;
  };
};

export const Card = styled.div<CardPropsType>`
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 20px;
  width: ${(props) => props.width || ""};
  height: auto;
  background: ${(props) => props.background};
  box-shadow: 0 0 2px 2px rgba(0 0 0 / 0.1);

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 10px;
    `}

  ${(props) =>
    props.border?.sm &&
    css`
      border: 1px solid black;
    `}
  ${(props) =>
    props.border?.md &&
    css`
      border: 3px solid black;
    `}
  ${(props) =>
    props.border?.lg &&
    css`
      border: 5px solid black;
    `}
  
  ${Container} {
    font-family: Inter, sans-serif;
    padding: 0 10px;
    text-align: start;
    display: flex;
    gap: 20px;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    color: #abb3ba;
  }
`;
