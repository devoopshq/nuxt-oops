import { resolve } from 'path'

export default function module (moduleOptions) {
  const options = Object.assign({}, this.options.oops, moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'oops.js',
    options,
    ssr: false
  })
}