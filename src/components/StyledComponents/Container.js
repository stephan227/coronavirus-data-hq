// src/components/StyledComponents/Container.js

import styled from "styled-components";

export default styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  text-align: center;
`;