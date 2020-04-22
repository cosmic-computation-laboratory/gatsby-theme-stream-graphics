/** @jsx jsx */
import { jsx, Box, Flex, Text } from "theme-ui";
import { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as Icon from "react-feather";

const query = graphql/* graphql */ `
  query staticQuery {
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }
`;

const formatUrl = (url) => url.replace(/^https?:\/\//, "");

const SocialLink = ({ name, url }) => {
  const IconComponent = Icon[name];

  return (
    <Flex sx={{ alignItems: "center" }}>
      <IconComponent sx={{ mr: "1vh" }} size={"3vh"} />
      <Text sx={{ fontSize: 0 }}>{formatUrl(url)}</Text>
    </Flex>
  );
};

export const SocialLinks = ({ ...props }) => {
  const data = useStaticQuery(query);
  return (
    <Box
      sx={
        {
          // display: "grid",
          // gridTemplateColumns: "0 1fr",
        }
      }
      {...props}
    >
      {data.site.siteMetadata.social.map(({ name, url }) => (
        <SocialLink key={name} name={name} url={url} />
      ))}
    </Box>
  );
};
