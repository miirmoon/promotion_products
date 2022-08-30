import { apiAxios } from "apis";

export const apiGetPromotionTags = async () => {
  return (await apiAxios.get(`/promotionTags`)).data;
};

export const apiGetPromotionProducts = async () => {
  return (await apiAxios.get(`/promotionProducts`)).data;
};
