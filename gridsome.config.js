// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/sass/*.sass")
        // you can also use a glob if you'd prefer
        // path.resolve(__dirname, './src/assets/sass/*.sass'),
      ]
    });
}

module.exports = {
  siteName: "Nancy Bilodeau",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/home/**/*.md",
        typeName: "services",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/pages/**/*.md",
        typeName: "PageContent",
        resolveAbsolutePaths: true,
        route: "/:slug",
        remark: {
          plugins: [
            //require("remark-attr")
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/soins/**/*.md",
        typeName: "soins",
        resolveAbsolutePaths: true,
        route: "/soins/:slug",
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    }
  ],
  chainWebpack: config => {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("sass").oneOf(type))
    );
  }
};
