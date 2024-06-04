<template>
  <div id="app">
    <Loader v-if="pending" />
    <template v-else>
      <Card
        :on-title="main.baseline"
        :title="main.title"
        :sub-title="main.intro"
        :alt="main.title"
        :images="main.images"
        :activate-hover="false"
      />
      <div v-if="countries.length > 0" class="grid">
        <Card
          v-for="country of countries" :key="country.title"
          :on-title="country.baseline"
          :title="country.title"
          :sub-title="country.intro"
          :alt="country.title"
          :images="country.images"
          :activate-hover="true"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { fetchData } from '~/services/countries'
import Loader from '~/components/Loader.vue'
import Card from '~/components/Card.vue'

const main = ref()
const countries = ref()
const pending = ref(true)

onMounted(() => {
  fetchData().then((response) => {
    main.value = response.mainHome
    countries.value = response.countries
    pending.value = false
  }).catch((error) => {
    console.log('catch', error)
  }).finally(() => {
    pending.value = false
  })
},
)
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    .container {
      margin-bottom: 0;

      &:nth-child(6n + 1) {
        grid-column: 1 / 3;
      }
      &:nth-child(6n + 6) {
        grid-column: 3 / 5;
      }
    }
  }
}
</style>
