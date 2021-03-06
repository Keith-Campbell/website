const mdx = require('@mdx-js/mdx')
const babel = require("@babel/core")
const fs = require('fs')
const path = require('path')

function requireFromStringSync(src, filename) {
  console.debug(src)
  const Module = module.constructor;
  const m = new Module();
  m._compile(src, filename);
  console.debug("m._compile passed")
  return m.exports;
}

function requireMDXSync(mdxSrc, filename) {
  const jsx = mdx.sync(mdxSrc)
  const babelOptions = babel.loadOptions({
    babelrc: false,
    presets: [
      '@babel/preset-react',
      // ^^^ mitigates error:
      // SyntaxError: unknown: Unexpected token (6:33)
      // > 6 | export default ({components}) => <MDXTag name="wrapper">{`
      //     |                                  ^
    ],
    plugins: [
      "@babel/plugin-transform-modules-commonjs",
      // ^^^ mitigages error:
      // hello.mdx:1
      // (function (exports, require, module, __filename, __dirname) { export const meta = {
      //                                                               ^^^^^^
      //      SyntaxError: Unexpected token export
    ]
  })
  const transformed = babel.transformSync(jsx, babelOptions)
  console.debug("return")
  return requireFromStringSync(transformed.code, filename)
}

function requireMDXFileSync(path) {
  console.debug("--requireMDXFileSync--")
  const mdxSrc = fs.readFileSync(path, { encoding: 'utf-8' })
  console.debug("readFiileSync passed")
  return requireMDXSync(mdxSrc, path)
}

function scanDir(dirPath, extension) {
  const mdxFiles = []
  const scan = (dirPath) => {
    const filenames = fs.readdirSync(dirPath)
    filenames.sort()
    filenames.map(filename => {
      const filePath = path.join(dirPath, filename)
      const st = fs.statSync(filePath)
      if (st.isFile() && filePath.endsWith(extension)) {
        mdxFiles.push(filePath)
      }
      if (st.isDirectory()) {
        scan(filePath)
      }
    })
  }
  scan(dirPath)
  return mdxFiles
}

function readPostMetadata(postPath) {
  console.debug("------readPostMetadata------")
//  const mod = requireMDXFileSync(postPath)
  //const { meta } = mod
  let fdata = new String()
  fdata = fs.readFileSync(postPath, 'utf8', function(err, data) {
    console.info(data);
  })
  const title = fdata.match(/(?<=(^\s+title:\s')).*?(?=')/gm)
  const publishDate = fdata.match(/(?<=(^\s+publishDate:\s')).*?(?=')/gm)
  const keywords = fdata.match(/(?<=(^\s+keywords:\s')).*?(?=')/gm)
  return {
    filePath: postPath,
    urlPath: postPath.replace(/\\/, '/').replace(/^pages/, '').replace(/\.mdx?$/, ''),
    title: title[0],
    publishDate: new Date(publishDate),
    keywords: keywords[0],
  }
}

function main() {
  const postPaths = scanDir('pages', '.mdx')
  console.debug({ postPaths })
  const now = new Date()
  const posts = postPaths
    .map(readPostMetadata)
    //.filter(post => post.publishDate <= now)
  console.debug("--posts mapped--")
  console.debug(posts)
  posts.sort((a, b) => b.publishDate - a.publishDate)
  console.debug({ posts })
  const postsJSON = JSON.stringify(posts, null, 2)
  const exportPath = 'posts.js'
  fs.writeFileSync(exportPath,
    '// automatically generated by build_post_index.js\n' +
    `export default ${postsJSON}\n`
  )
  console.info(`Saved ${posts.length} posts in ${exportPath}`)
}

main()