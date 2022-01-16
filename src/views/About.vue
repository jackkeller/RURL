<template>
  <section class="about">
    <h1>My Vue.js Learning Experience</h1>
    <p>Never have I ever ... worked on a Vue.js project. Overall I like working with it however some mistakes were
      made along the way. I found my preferred tooling for testing was not well supported, but I ended up getting 
      things working after some hurdles were cleared.</p>
    <p><strong>Below are some of my notes/thoughts.</strong></p>
    <ul>
      <li>I've been scoffed at before for using bracketless <pre>.sass</pre>, but I prefer less typing</li>
      <li>Given my lack of knowledge on <a href="https://vuejs.org" target="add-to-the-crazy-amount-of-tabs-you-likely-have-open">Vue.js</a> I didn't <abbr title="Test Driven Development">TDD</abbr> this like I normally would</li>
      <li>I would have implemented proper state management if I had more time</li>
      <li>App is responsive, used css variables for differences to minimize the need for mediaqueries throughout</li>
      <li>App has light and dark mode variants, if you want to check both use your <pre>devtools > rendering</pre> to emulate the opposite of your system settings</li>
      <li>Transitions take <pre>prefers-reduced-motion</pre> into consideration for accessibility reasons</li>
      <li>Filtering seemed problematic for whatever reason so that code looks pretty messy, state management would have helped here</li>
      <li>I feel like using the <pre>v-if</pre> syntax was clunky, I would have preferred something different here but my knowledge of Vue.js was just not up to the task</li>
      <li>This was a fun use of my spare time, over the course of the weekend I have around <time>5 hours</time> total logged</li>
    </ul>
  </section>
</template>

<style lang="sass" scoped>
  pre
    display: inline
    font-size: large
    line-height: 1

  abbr
    border-bottom: var(--border-medium) dotted var(--nav-link-active-color)
    text-decoration: none
</style>