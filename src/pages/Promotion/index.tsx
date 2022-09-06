import { useState } from "react";
import styled from "styled-components";
import ProductList from "./components/ProductList";

import PromotionTabs from "./components/PromotionTabs";

export default function Promotion() {
  const [selectId, setSelectId] = useState(-1);

  const handleSelectId = (id: number) => {
    setSelectId(id);
  };

  return (
    <>
      <PromotionTitle>금주의 전단 상품을 만나보세요</PromotionTitle>
      <PromotionTabs select={selectId} onClick={handleSelectId} />
      <ProductList select={selectId}></ProductList>
    </>
  );
}

const PromotionTitle = styled.h2`
  margin: ${(props) => props.theme.boxSize.medium} 0;
  padding: 0 ${(props) => props.theme.boxSize.medium};
`;
