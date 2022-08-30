import { useLocation } from "react-router-dom";
import styled from "styled-components";

const pageTitle: { [key: string]: string } = {
  "/promotion_products": "금주의 전단광고",
};

export default function Header() {
  const location = useLocation();

  return <HeaderBox>{pageTitle[location.pathname]}</HeaderBox>;
}

const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.theme.boxSize.header};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-align: center;
  line-height: ${(props) => props.theme.boxSize.header};
  background-color: ${(props) => props.theme.colors.white};
`;
