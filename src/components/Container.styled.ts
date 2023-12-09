import { styled } from "styled-components";

type ContainerPropsType = {
  width?: string;
  height?: string;
  flexDirection: "row" | "column";
};

export const Container = styled.div<ContainerPropsType>`
  width: ${(props) => props?.width || "100%"};
  height: ${(props) => props?.height || "auto"};
  flex-direction: ${(props) => props.flexDirection};
`;
