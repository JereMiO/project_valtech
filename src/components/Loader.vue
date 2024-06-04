<template>
  <div>
    <p>The content is loading...</p>
    <div class="grid">
      <div v-for="n in 5" :key="n" class="placeholder" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .placeholder {
    background: #E1E1E1;
    border-radius: 7px;
    height: 20rem;

  }

}
</style>
