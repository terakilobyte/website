/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("typeface-inter")

// gatsby-browser.js
require("./src/templates/prism-nannou.css")

export const onClientEntry = () => {  
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
}
