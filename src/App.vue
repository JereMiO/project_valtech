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
        :opacity="1"
      />
      <div v-if="countries.length > 0" class="grid">
        <Card
          v-for="country of countries" :key="country.title"
          :on-title="country.baseline"
          :title="country.title"
          :sub-title="country.intro"
          :alt="country.title"
          :images="country.images"
          :opacity="0"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { fetchCountries } from '~/services/countries'
import Loader from '~/components/Loader.vue'
import Card from '~/components/Card.vue'

const main = ref()
const countries = ref()
const pending = ref(true)

onMounted(async () => {
  try {
    const response = await fetchCountries()
    main.value = response.mainHome
    countries.value = response.countries
  }
  catch (error) {
    console.log('catch', error)
  }
  finally {
    pending.value = false
  }
})
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);

    .card {
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
