import { apiGetPromotionProducts } from "apis/promotion";
import useIntersectionObserver from "hooks/useIntersection";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { IPromotionProduct } from "types/IPromotion";
import Product from "./Product";

export default function ProductList(props: { select: number }) {
  const COUNT_PER_PAGE = 10;

  const [allProducts, setAllProducts] = useState<IPromotionProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts = useMemo(() => {
    if (props.select === -1) return allProducts;

    return allProducts.filter(
      (product) => product.promotionId === props.select
    );
  }, [props.select, allProducts]);

  const showProducts = useMemo(
    () => filteredProducts.slice(0, currentPage * COUNT_PER_PAGE),
    [filteredProducts, currentPage]
  );

  useEffect(() => {
    apiGetPromotionProducts().then((res) => {
      setAllProducts(res);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [props.select]);

  const handlePage = () => {
    setCurrentPage((prev) => prev + 1);
    console.log(currentPage);
  };

  const setBottom = useIntersectionObserver(handlePage, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <ProductListBox>
      {showProducts.map((product) => {
        return <Product key={product.id} product={product}></Product>;
      })}
      <div ref={setBottom} />
    </ProductListBox>
  );
}

const ProductListBox = styled.div`
  padding: ${(props) => props.theme.boxSize.big}
    ${(props) => props.theme.boxSize.medium};
  display: flex;
  flex-wrap: wrap;
`;
