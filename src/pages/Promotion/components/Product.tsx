import styled from "styled-components";
import theme from "styles/theme";
import { IPromotionProduct } from "types/IPromotion";
import { ChipButton } from "components/ChipButton";

import { insertCommas } from "utils/convertPrice";

export default function Product(props: { product: IPromotionProduct }) {
  return (
    <ProductBox>
      <ImageBox>
        <img src={props.product.image} alt={props.product.title + " 이미지"} />
      </ImageBox>
      <InfoBox>
        {props.product.price.length > 0 && (
          <InfoPrice>{insertCommas(props.product.price).join("/")}</InfoPrice>
        )}
        {props.product.salePrice.length > 0 && (
          <InfoContent fontSize={theme.fontSize.medium}>
            {insertCommas(props.product.salePrice).join("/")}원
          </InfoContent>
        )}
        <InfoContent fontSize={theme.fontSize.small}>
          {props.product.title}
        </InfoContent>
        <TagBox>
          {props.product.adviceTags.map((tag, i) => (
            <ChipButton
              key={i}
              color={theme.colors.blue}
              fontSize={theme.fontSize.micro}
            >
              {tag}
            </ChipButton>
          ))}
          {props.product.discountTags.map((tag, i) => (
            <ChipButton
              key={i}
              color={theme.colors.red}
              fontSize={theme.fontSize.micro}
            >
              {tag}
            </ChipButton>
          ))}
        </TagBox>
      </InfoBox>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.mediaSize.mobile};
  margin-bottom: ${(props) => props.theme.boxSize.medium};
  display: flex;
`;

const ImageBox = styled.div`
  margin-right: ${(props) => props.theme.boxSize.medium};
  width: 120px;
  min-width: 120px;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TagBox = styled.div`
  ${ChipButton} {
    margin-right: 2px;
  }
`;

const InfoContent = styled.div<{ fontSize: string }>`
  margin-bottom: 3px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const InfoPrice = styled.div`
  color: ${(props) => props.theme.colors.grey15};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-decoration: line-through;
`;
