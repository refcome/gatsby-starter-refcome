import * as React from "react"
import Layout from "../components/layout"

// @ts-ignore
import { ReactComponent as Logo } from "../images/inline_svg/horizontal_RGB.svg"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Logo width="400px" />
        <p>Hello JAM!🦄</p>
      </Layout>
    )
  }
}
