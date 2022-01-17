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
- I've been scoffed at before for using bracketless `.sass`, but I prefer less typing
- Given my lack of knowledge on [Vue.js](https://vuejs.org), I didn't TDD this like I normally would
- I would have implemented proper state management if I had more time
- App is responsive, used css variables for differences to minimize the need for mediaqueries throughout
- App has light and dark mode variants, if you want to check both use your `devtools > rendering` to emulate the opposite of your system settings
- Transitions take `prefers-reduced-motion` into consideration for accessibility reasons
- Filtering seemed problematic for whatever reason so that code looks pretty messy, state management would have helped here
- I feel like using the `v-if` syntax was clunky, I would have preferred something different here but my knowledge of Vue.js was just not up to the task
- A better understanding of the lifecycle hooks and the composition api would have really helped performance
- This was a fun use of my spare time, over the course of the weekend I have around <time>10 hours</time> total logged in small increments