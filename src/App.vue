<template>
  <div class="layout">
    <header>
      <div class="container">
        <div class="logo">{{ title }}</div>
        <nav id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <footer>
      <div class="container">
        <small>&copy; {{ year }} {{ title }}</small>
      </div>
    </footer>
  </div>
</template>

<script>
import { logHeader, logStandard } from '@/vars.js'
export default {
  name: 'App',
  data () {
    return {
      title: 'RURL',
      year: new Date().getFullYear()
    }
  }
}
console.log('%cApp Started!\n\n%cWelcome to Jack Keller\'s Playground...', logHeader, logStandard);
</script>

<style lang="sass">
  @import "@/styles/app.sass"

  .logo
    font-size: 1.4rem 

  nav
    a
      color: var(--nav-link-color)
      font-weight: bold
      text-transform: uppercase
      text-decoration: none
      padding: 0 .5rem

      &:not(:last-child)
        margin-right: 1rem

      &.router-link-exact-active
        color: var(--nav-link-active-color)
        border-bottom: 4px solid var(--text-secondary)
</style>
