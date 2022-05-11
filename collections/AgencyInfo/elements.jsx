import styled from "styled-components";
import { SectionContainer } from "~/components";

export const Container = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  align-items: center;
`;

export const Left = styled(({ ...props }) => <div {...props} />)``;

export const Right = styled(({ ...props }) => <div {...props} />)`
  width: 40%;
`;

export const Title = styled(({ ...props }) => <h3 {...props} />)`
  font-family: Poppins;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: bold;
`;

export const Paragraph = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;
