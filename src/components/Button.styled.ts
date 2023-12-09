import { css, styled } from "styled-components";

type ButtonPropsType = {
  color?: `#${string}`;
  textColor?: `#${string}`;
  fontSize?: `${number}${"px" | "em"}`;
  type?: "filled" | "outlined";
  rounded?: boolean;
};

export const Button = styled.button<ButtonPropsType>`
  background: ${(props) => props.color || "#000"};
  color: ${(props) => props.textColor || "#fff"};
  border-radius: ${(props) => (props?.rounded ? "5px" : "")};
  font-size: 10px;
  line-height: 20px;
  width: 85px;
  height: 30px;
  font-weight: 700;

  ${(props) =>
    props?.type === "filled" &&
    css`
      border: none;
      background: ${props?.color || "#4E71FE"};
      &:hover {
        opacity: 0.6;
      }
    `}

  ${(props) =>
    props?.type === "outlined" &&
    css`
      background: transparent;
      border: 2px solid ${props?.color || "#a4b3f5"};
      &:hover {
        border: 2px solid #c2c2c2;
      }
    `}

  &:hover {
    cursor: pointer;
  }
`;
