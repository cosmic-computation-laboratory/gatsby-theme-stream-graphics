import { base } from "@theme-ui/presets";

export default {
  ...base,
  colors: {
    ...base.colors,
    background: "transparent",
    canvas: "transparent",
    guideline: "hotPink",
  },
  space: [0, "2vh", "4vh", "8vh", "16vh"],
  fontSizes: ["3vh", "4vh", "6vh", "8vh", "16vh"],
  viewport: {
    widescreen: {
      height: 1080,
      width: 1920,
    },
  },
};
