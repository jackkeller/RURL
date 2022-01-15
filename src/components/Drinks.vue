<template>
  <section class="categories">
    <h1>{{ heading }}</h1>
    <select data-testid="drink-category-select">
      <option value="">Select a category</option>
      <option v-for="category in categoryList" :key="category.strCategory" :value="category.strCategory">
        {{ category.strCategory }}
      </option>
    </select>
  </section>
</template>

<script>
import fetch from 'cross-fetch'
import { api } from '@/vars.js'

export default {
  name: 'Drinks',
  props: {
    heading: String
  },
  data() {
    this.categoryList
    return {
      categoryList: []
    }
  },
  methods: {
    getDrinkCategories() {
      fetch(api.list)
        .then(res => res.json())
        .then(data => {
          this.categoryList = data.drinks
        })
    }
  },
  mounted() {
    this.getDrinkCategories()
  }
}
</script>

