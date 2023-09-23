import "styled-components";

export enum BREAK_POINTS {
  MOBILE = "37.5em", //600px
  SMALL_MOBILE = "22.5em", //360px/16
  TABLETLAND = "62em", //992px/16
  SMALL_VIEWPORT = "36em", //576px
  TABLETPORT = "48em", //768px/16
  DESKTOP_VIEWPORT = "75em", //1200px
  LARGE_DESKTOP = "90em", //1440px
}

export enum COLORS {
  BLACK = "#000000",
  NICKEL = "#929394",
  ARDCOAT = "#E4DFDF",
  RED_COLOR = "#f41515",
  DARK_GREEN = "#008000",
  LINEAR_COLOR = "#FE34B9",
  TEXT_COLOR = "#989CA5",
  QUICKSILVER = "#A6A6A6",
  COTTON_BOLL = "#E9EFFB",
  PADLOCK_BLUE = "#002C8A",
  WHITE_COLOR = "#FFFFFF",
  CHIMNEY_SWEEP = "#263238",
  AIRFORCE_BLUE = "#002c8a",
  EXTERIOR_GREY = "#949597",
  GLAZED_GRANITE = "#5C5F61",
  CULTURED_COLOR = "#F5F4F4",
  TRANSPARENT = "transparent",
  POISONOUS_PESTICIDE = "#33CC33",
}

export enum FONTS {
  Montserrat = "Montserrat",
  UnicaOne = "Unica One",
  ClashDisplayBold = "ClashDisplay-Bold",
  ClashDisplayRegular = "ClashDisplay-Regular",
}

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: typeof FONTS;
    // App break points
    breakpoints: typeof BREAK_POINTS;
    // All Global App Colors typings
    colors: typeof COLORS;
    // App color converter
    // hexToRGB: (hexColor: string, alpha?: number | undefined) => string;
  }
}
