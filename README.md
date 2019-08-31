# @devoopshq/nuxt

> A [Nuxt.js](https://github.com/nuxt/nuxt.js) plugin

```javascript
// nuxt.congig.js

const {
  npm_package_name,
  npm_package_version
} = process.env

modules: [ '~/modules/oops'],
  
oops: {
  release: `${npm_package_name}@${npm_package_version}`,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV...'
}
```
