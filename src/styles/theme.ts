import { DefaultTheme } from "styled-components";

const colors = {
  white: "#fff",
  black: "#222",
  grey01: "#f3f3f3",
  grey05: "#e0e0e0",
  grey10: "#9e9e9e",
  grey15: "#767676",
  grey20: "#575757",
  blue: "#4774cf",
  yellow: "#FFC61C",
  red: "#db392e",
};

const fontSize = {
  large: "23px",
  medium: "17px",
  normal: "15px",
  small: "13px",
  micro: "10px",
};

const fontWeight = {
  bold: 700,
  semiBold: 500,
  normal: 400,
  this: 300,
};

/** margin, padding */
const boxSize = {
  header: "60px",
  big: "50px",
  large: "25px",
  medium: "20px",
  normal: "16px",
  small: "13px",
  micro: "10px",
};

/** box-shadow shape */
const shadow = {
  normal: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  thin: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};

/** device size */
const mediaSize = {
  mobile: "425px",
  tablet: "768px",
  pc: "1024px",
};

const theme: DefaultTheme = {
  colors,
  fontSize,
  fontWeight,
  boxSize,
  shadow,
  mediaSize,
};

export default theme;

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type BoxSizeTypes = typeof boxSize;
export type ShadowTypes = typeof shadow;
export type MediaSizeTypes = typeof mediaSize;
