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
</style>
