import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
       Hello and Welcome to my Gatsby Demo
      </h1>
      <p className={styles.intro}>
        It doesnt do that much at the mo.
      </p>
    </div>
    <p>Here is soem lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus ornare metus convallis dictum. Nam libero magna, viverra accumsan nulla quis, sollicitudin condimentum risus. Sed iaculis id mauris nec feugiat. In a mauris ante. Curabitur sit amet nunc sagittis, volutpat dolor ut, mollis purus. Phasellus porta egestas tincidunt. Nam leo felis, venenatis at elementum vel, cursus ac nisi. Nulla varius, ipsum vitae aliquet dictum, nulla nibh euismod erat, et vulputate ipsum ipsum eu eros. Cras vitae nunc eros.</p>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
