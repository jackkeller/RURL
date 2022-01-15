<template>
  <section class="categories">
    <div class="heading">
      <select data-testid="drink-category-select" @change="filterCategory($event.target.value)">
        <option v-if="categoryList.length" :value="categoryList[0].strCategory">Select a drink category</option>
        <option v-for="category in categoryList" :key="category.strCategory" :value="category.strCategory">
          {{ category.strCategory }}
        </option>
      </select>
      <h1>{{ selectedDrinksType }}</h1>
    </div>    
  </section>
  
  <section v-if="!selectedDrinks.length">
    <h2>Loading...</h2>
  </section>

  <section v-if="selectedDrinks.length">
    <div class="drinks">
      <div class="drink" v-for="drink in selectedDrinks" :key="drink.idDrink">
        <h3>{{ drink.strDrink }}</h3>
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink" :title="drink.strDrink">
      </div>
    </div>
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
      categoryList: [],
      selectedDrinks: [],
      selectedDrinksType: '',
    }
  },
  methods: {
    getDrinkCategories() {
      fetch(api.list)
        .then(res => res.json())
        .then(data => {
          this.categoryList = data.drinks
        })
    },
    filterCategory(category) {
      this.selectedDrinksType = `${category}s`
      fetch(api.filter + category)
        .then(res => res.json())
        .then(data => {
          this.selectedDrinks = data.drinks
        })
    }
  },
  mounted() {
    this.getDrinkCategories(),
    setTimeout(() => {
      this.filterCategory(this.categoryList[0].strCategory)
    }, 1000)
  }
}
</script>