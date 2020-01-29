import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Color, Variables } from "./designToken"
import css from "styled-jsx/css"
import "ress/ress.css" // apply base reset-css

const resetStyle = css.global`
  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`

interface Props {
  title?: string
  children: any
}

const Layout = (props: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  const pageTitle = props.title
    ? `${props.title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title
  return (
    <>
      <style jsx global>
        {resetStyle}
      </style>
      <style jsx global>{`
        body {
          color: ${Color.defaultText};

          /* see: our visual identity guideline */
          font-family: MetricWeb, "TBゴシック SL", TBGothic SL, "Noto Sans JP",
            -apple-system, BlinkMacSystemFont, "Helvetica Neue",
            "游ゴシック体", YuGothic, "ヒラギノ角ゴ ProN W3",
            Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-feature-settings: "palt";
        }
        body main {
          width: 100%;
          position: relative;
        }

        @media (${Variables.breakPoint.sp}) {
          /* something */
        }
      `}</style>
      <Helmet
        htmlAttributes={{
          lang: "ja",
        }}
        title={pageTitle}
        meta={[
          {
            name: `description`,
            content: "something",
          },
          {
            property: `og:title`,
            content: "something",
          },
          {
            property: `og:description`,
            content: "something",
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: `${require("../images/vertical_RGB.png")}`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: "something",
          },
          {
            name: `twitter:description`,
            content: "something",
          },
          {
            name: `twitter:image`,
            content: `${require("../images/vertical_RGB.png")}`,
          },
        ]}
      >
        {/* <link
          rel="icon"
          type="image/png"
          href={require("../images/favicon.png")}
        />
        <link
          rel="apple-touch-icon"
          href={require("../images/apple-touch-icon.png")}
        /> */}
      </Helmet>
      <main>{props.children}</main>
    </>
  )
}
export default Layout
