/** @jsx jsx */
import { jsx, Box } from "theme-ui";

import { useDebug } from "../providers/debug";

export const Viewport = ({
  variant = "viewport.widescreen",
  zoom = 1,
  ...props
}) => {
  const debug = useDebug();

  return (
    <Box
      sx={{
        variant,
        zoom: zoom,
        border: debug ? "1px solid" : "0",
        borderColor: "guideline",
      }}
      {...props}
    />
  );
};
