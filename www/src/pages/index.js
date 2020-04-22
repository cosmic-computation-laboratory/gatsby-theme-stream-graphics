/** @jsx jsx */
import { jsx, Styled, Heading, Box, Flex } from "theme-ui";
import { Layout } from "gatsby-theme-streamcards-base/src/components/Layout";
import { Viewport } from "gatsby-theme-streamcards-base/src/components/Viewport";
import { Card } from "gatsby-theme-streamcards-base/src/components/Card";
import { useDebug } from "gatsby-theme-streamcards-base/src/providers/debug";
import { SocialLinks } from "gatsby-theme-streamcards-base/src/components/Social";

const alignHorizontalToAlignItems = (align = "center") =>
  ({
    left: "flex-start",
    center: "center",
    right: "flex-end",
  }[align]);

const alignVerticalToJustify = (align = "center") =>
  ({
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
  }[align]);

const Col = ({
  alignHorizontal = "center",
  alignVertical = "top",
  ...props
}) => {
  const debug = useDebug();

  return (
    <Flex
      sx={{
        alignItems: alignHorizontalToAlignItems(alignHorizontal),
        justifyContent: alignVerticalToJustify(alignVertical),
        flexDirection: "column",
        border: debug && `1px solid`,
        borderColor: debug && "guideline",
      }}
      {...props}
    />
  );
};

const Cols = ({ count = 2, ...props }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: `repeat(${count}, 1fr)`,
      gridGap: 2,
      width: "100%",
      height: "100%",
    }}
    {...props}
  />
);

const songTitle = false && "Oh Child";

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        streamTitle
        author
        social {
          name
          url
        }
      }
    }
  }
`;

const Index = ({ data }) => {
  return (
    <Layout debug>
      <Viewport>
        <Card
          header={
            <Cols count={2}>
              <Col alignHorizontal="left">
                <Heading sx={{ fontSize: 1 }}>
                  {data.site.siteMetadata.streamTitle}
                </Heading>
              </Col>
              <Col alignHorizontal="right">
                <Heading sx={{ fontSize: 1 }}>4/22/2020</Heading>
              </Col>
            </Cols>
          }
          footer={
            <Cols>
              <Col alignHorizontal="left" alignVertical="bottom">
                <Heading sx={{ fontSize: 2 }}>{songTitle}</Heading>
                <Heading sx={{ fontSize: 1 }}>
                  {data.site.siteMetadata.author}
                </Heading>
              </Col>
              <Col alignHorizontal="right" alignVertical="bottom">
                <SocialLinks sx={{ textAlign: "right" }} />
              </Col>
            </Cols>
          }
        ></Card>
      </Viewport>
    </Layout>
  );
};

export default Index;
