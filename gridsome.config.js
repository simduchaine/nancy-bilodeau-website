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
  siteUrl: "https://nancybilodeau.com",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "fas fa-hashtag",
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-38958579-4"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    },
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
        path: "data/bio/**/*.md",
        typeName: "bio",
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
        route: "/:title",
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
        path: "data/formations/**/*.md",
        typeName: "formations",
        resolveAbsolutePaths: true,
        route: "/formations/:type/:title",
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
        path: "data/boutique/**/*.md",
        typeName: "products",
        resolveAbsolutePaths: true,
        route: "/boutique/:title",
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
        route: "/soins/:title",
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-youtube",
              ,
              { width: "500px", align: "auto" }
            ]
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/site.yaml",
        typeName: "settings",
        resolveAbsolutePaths: true,
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
        path: "data_en/home/**/*.md",
        typeName: "servicesEn",
        resolveAbsolutePaths: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/bio/**/*.md",
        typeName: "bioEn",
        resolveAbsolutePaths: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/pages/**/*.md",
        typeName: "PageContentEn",
        resolveAbsolutePaths: true,
        route: "/en/:title"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/training/**/*.md",
        typeName: "training",
        resolveAbsolutePaths: true,
        route: "/en/training/:type/:title"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/shop/**/*.md",
        typeName: "productsEn",
        resolveAbsolutePaths: true,
        route: "/en/shop/:title"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/services/**/*.md",
        typeName: "soinsEn",
        resolveAbsolutePaths: true,
        route: "/en/services/:title",
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-youtube",
              ,
              { width: "500px", align: "auto" }
            ]
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
