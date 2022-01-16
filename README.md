# RURL

> Teaching myself Vue.js because I've never really worked with this framework.

## Project setup
If you're not using `nvm` you'll want to make sure you're doing the step below with `v15.14.0` node in the directory, if you are using `nvm`, you're all set!
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
If you'd like to see your build locally make sure you have `serve` installed (globally is best) and drop into the `dist` folder and run `serve -s` and you should be able to see any potential production issues with your dependencies.

### Lints and fixes files
```
yarn lint
```

## Lessons Learned
- I had a heck of a time getting `@testing-library/vue` to work with vue3 and jest; this took a bit longer than I would have liked.
- Ran into issues with Jest not recognizing `fetch` so added `cross-fetch` package that seemed to do the trick.
