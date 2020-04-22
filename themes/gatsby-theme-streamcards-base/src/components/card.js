/** @jsx jsx */
import { jsx, Styled, Flex, Box, View } from "theme-ui";
import { useDebug } from "../providers/debug";

export const Card = ({ header, footer }) => {
  const debug = useDebug();
  const secondaryHeight = "15vh";
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: ({ space }) => `${space[4]} 1fr ${space[4]}`,
        gridGap: 2,
        padding: 2,
        gridTemplateAreas: `
        "header"
        "content"
        "footer"
        `,
        height: "100%",
      }}
    >
      <Flex
        sx={{
          gridArea: "header",
          border: debug && "1px solid",
          borderColor: "guideline",
          // p: 1,
          // justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {header}
      </Flex>
      <Flex
        sx={{
          gridArea: "content",
          border: debug && "1px solid",
          borderColor: "guideline",
          // justifyContent: "center",
          alignItems: "center",
        }}
      />
      <Flex
        sx={{
          gridArea: "footer",
          border: debug && "1px solid",
          borderColor: "guideline",
          // justifyContent: "center",
          // alignItems: "flex-end",
          // p: 1,
        }}
      >
        {footer}
      </Flex>
    </Box>
  );
};
