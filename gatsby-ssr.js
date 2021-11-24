/* eslint-disable react/no-danger */
import React from 'react'

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

export const onPreRenderHTML = ({
  getPreBodyComponents,
  replacePreBodyComponents,
}) => {
  const preBodyComponents = getPreBodyComponents()

  const cornerText = `
<a href="../tip" class="buy-me-a-coffee" aria-label="Buy Me A Coffee"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">"M9.197 0L7.578 3.735H5.171v3.359h.921l.943 5.975H5.562L7.51 24.042l1.249-.015L10.015 32h11.891l.083-.531l1.172-7.443l1.188.015l1.943-10.973h-1.407l.937-5.975h1.011V3.734h-2.557L22.651-.001zm.704 1.073h12.057l1.025 2.375H8.868zm-3.666 3.73H25.76v1.228H6.235zm.604 9.333h18.183l-1.568 8.823l-7.536-.079l-7.511.079z" fill="currentColor"/></svg></a>
`

  preBodyComponents.push(<div dangerouslySetInnerHTML={{ __html: cornerText }}></div>)
  replacePreBodyComponents(preBodyComponents)
}
