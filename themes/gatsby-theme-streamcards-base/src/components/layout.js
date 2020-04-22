/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";

import { DebugProvider } from "../providers/debug";

export const Layout = ({ data, debug = false, children }) => {
  return (
    <DebugProvider debug={debug}>
      <Styled.root>
        <Flex
          sx={{
            bg: "canvas",
            height: "100vh",
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Flex>
      </Styled.root>
    </DebugProvider>
  );
};
