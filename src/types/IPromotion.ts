export interface IPromotionTag {
  id: number;
  title: string;
}

export interface IPromotionProduct {
  id: number;
  image: string;
  title: string;
  price: number[];
  salePrice: number[];
  adviceTags: string[];
  discountTags: string[];
  likeCount: number;
  commentCount: number;
  promotionId: number;
}
