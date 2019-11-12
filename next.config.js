const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'mdx', 'md', 'jsx'],
  exportPathMap: function(defaultPathMap) {
    const pathMap = Object.assign({}, defaultPathMap)
    delete pathMap['/index']
    return pathMap
  }
})

