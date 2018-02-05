// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("D:\\lordd\\Repositories\\gatsby-portfolio\\.cache\\dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\lordd\\Repositories\\gatsby-portfolio\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("D:\\lordd\\Repositories\\gatsby-portfolio\\src\\pages\\page-2.js")),
  "component---src-pages-counter-js": preferDefault(require("D:\\lordd\\Repositories\\gatsby-portfolio\\src\\pages\\counter.js"))
}

exports.json = {
  "dev-404-page.json": require("D:\\lordd\\Repositories\\gatsby-portfolio\\.cache\\json\\dev-404-page.json"),
  "index.json": require("D:\\lordd\\Repositories\\gatsby-portfolio\\.cache\\json\\index.json"),
  "page-2.json": require("D:\\lordd\\Repositories\\gatsby-portfolio\\.cache\\json\\page-2.json"),
  "counter.json": require("D:\\lordd\\Repositories\\gatsby-portfolio\\.cache\\json\\counter.json")
}