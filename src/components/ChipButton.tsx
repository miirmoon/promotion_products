import styled from "styled-components";

export const ChipButton = styled.span<{ color: string; fontSize: string }>`
  max-width: 100%;
  display: inline-block;
  padding: 0 4px;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 3px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 1.15rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
