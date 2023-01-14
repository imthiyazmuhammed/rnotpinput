import { scaleFont } from "./mixins";

// FONT FAMILY
export const FONT_FAMILY_REGULAR = "Poppins-Regular";
export const FONT_FAMILY_BOLD = "Poppins-Bold";

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_MEDIUM = "500";
export const FONT_WEIGHT_BOLD = "700";

// FONT SIZE
export const FONT_S = scaleFont(12);
export const FONT_M = scaleFont(14);
export const FONT_R = scaleFont(16);
export const FONT_L = scaleFont(19);
export const FONT_XL = scaleFont(24);

// LINE HEIGHT
export const LINE_HEIGHT_S = scaleFont(16);
export const LINE_HEIGHT_M = scaleFont(20);
export const LINE_HEIGHT_L = scaleFont(24);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
