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
    <input type="text" placeholder="Filter Drinks..." name="search" @keyup="filterDrinks($event.target.value || null)" ref="search">
  </section>
  
  <section v-if="!selectedDrinks.length">
    <h2>Loading...</h2>
  </section>
  
  <section v-if="filteredToNothing">
    <h2>No drinks found...</h2>
  </section>
  
  <section v-if="selectedDrinks.length && !filteredDrinks.length && !filteredToNothing">
    <div class="drinks">
      <div class="drink" v-for="drink in selectedDrinks" :key="drink.idDrink">
        <strong class="drink-heading">{{ drink.strDrink }}</strong>
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink" :title="drink.strDrink" height="100" width="100">
      </div>
    </div>
  </section>

  <section v-if="filteredDrinks.length">
    <div class="drinks">
      <div class="drink" v-for="drink in filteredDrinks" :key="drink.idDrink">
        <strong class="drink-heading">{{ drink.strDrink }}</strong>
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink" :title="drink.strDrink" height="100" width="100">
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
      filteredDrinks: [],
      filteredToNothing: false,
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
          this.filteredDrinks = []
          this.$refs.search.value = ''
          this.selectedDrinks = data.drinks
        })
    },
    filterDrinks(filter) {
      let filteredDrinks = this.selectedDrinks
      if (filter) {
        filteredDrinks = filteredDrinks.filter(drink => {
          return drink.strDrink.toLowerCase().includes(filter.toLowerCase())
        })
      
        if (filteredDrinks.length) {
          this.filteredToNothing = false
          this.filteredDrinks = filteredDrinks 
        } else {
          this.filteredToNothing = true
        }

        this.filteredDrinks = filteredDrinks
        return filteredDrinks
      } else {
        this.filteredDrinks = []
      }
    }
  },
  mounted() {
    this.getDrinkCategories()

    setTimeout(() => {
      this.filterCategory(this.categoryList[0].strCategory)
    }, 1000)
  }
}
</script>