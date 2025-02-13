module.exports = {
    siteMetadata: {
        title: 'Nannou · Creative Coding Framework for Rust',
        titleTemplate: '%s · Nannou',
        author: 'Nannou',
        keywords: ['Nannou', 'Creative Coding', 'Rust', 'Audio', 'Graphics', 'Vulkan', 'Lasers'],
        description:
            'An open-source creative-coding framework for Rust',
        siteUrl: 'https://nannou.cc', // no trailing slash!
        image: '/static/images/josh-profile.jpg',
        owner: 'Nannou',
        social: {
            twitter: '',
            facebook: '',
        },
    },
    plugins: [
        `gatsby-transformer-sharp`,
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    { userAgent: '*', allow: '/' },
                ] 
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-117502197-2',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional but Germany requires it!
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "Nannou",
              short_name: "Nannou",
              start_url: "/",
              background_color: "#f4f4f4",
              theme_color: "#2b2b2b",
              display: "standalone",
              icon: "static/images/icon.png", // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`, // This needs to come AFTER gatsby-plugin-manifest which is why its here
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-responsive-iframe',
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            offsetY: `100`,
                            icon: false,
                            className: `custom-class`,
                            maintainCase: true,
                            removeAccents: true,
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (eg for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-rust",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in src/layouts/index.js
                            // right after importing the prism color scheme:
                            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                        }
                    }
                ]
            }
        }
    ]
}
