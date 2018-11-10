import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../theme";

const Container = styled.div<{ dividerColor: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid ${props => props.dividerColor};
  min-height: 25px;
`;

const Label = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  padding-right: 10px;
  color: ${props => props.color};
  font-size: 12px;
  width: 150px;
  min-width: 150px;

  span {
    margin-left: 3px;
  }

  svg {
    min-width: 11px;
  }
`;
const Value = styled.div`
  display: flex;
  flex-grow: 1;
`;

interface Props {
  icon: React.ReactElement<any>;
  label: string;
  children: ReactElement<any>;
}

export default function KnobFrame({ icon, label, children }: Props) {
  const {
    knob: { label: themeLabel }
  } = useContext(ThemeContext);

  return (
    <Container dividerColor={themeLabel.dividerColor}>
      <Label color={themeLabel.color}>
        {icon}
        <span>{label}</span>
      </Label>
      <Value>{children}</Value>
    </Container>
  );
}
