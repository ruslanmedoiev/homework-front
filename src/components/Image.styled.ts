import { styled } from "styled-components";

export const Image = styled.img.attrs(({ alt }) => ({
  alt: alt ?? "some alt of image",
}))`
  display: block;
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;
