import styled from "styled-components";

import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const Container = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
  height: 100%;
`;

export const Heading = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const Subheading = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 5rem;
`;

export const InfoContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
`;

export const LeftInfo = styled(({ ...props }) => <div {...props} />)`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightInfo = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`;
