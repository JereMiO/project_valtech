<template>
  <article class="card">
    <img
      :src="images.xs"
      :srcset="`${images.xs} 320w, ${images.s} 575w, ${images.m} 768w, ${images.l} 1024w, ${images.xl} 1280w`"
      :alt="onTitle"
      class="card_bg"
    >
    <a
      v-if="opacity" href="https://github.com/JereMiO/project_valtech" target="_blank"
      class="card_link-to-github"
    >
      <img
        width="50px"
        src="/github-mark-white.svg" alt="github"
      >
    </a>
    <div class="card_text">
      <h1 v-if="onTitle" class="card_text_on-title">
        {{ onTitle }}
      </h1>
      <h2 v-if="title" class="card_text_title">
        {{ title }}
      </h2>
      <p
        class="card_text_content card_text_content_sub-title"
      >
        {{ subTitle }}
      </p>
      <a
        class="card_text_content card_text_content_link"
        :href="`https://en.wikipedia.org/wiki/${title}`" target="_blank"
      >
        Wikipedia
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  images: Images
  alt: string
  onTitle: string
  title: string
  subTitle?: string
  opacity: number
}>()

interface Images {
  xs: string
  s: string
  m: string
  l: string
  xl: string
}
</script>

<style scoped>
.card {
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 1rem;
  border-radius: 7px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-height: 28rem;
  }
}

.card_bg {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:hover > .card_bg {
  filter: brightness(50%);
  transition: all 300ms ease-out;
}

.card:hover > .card_text .card_text_content{
  opacity: 1
}

.card_link-to-github {
  position: absolute;
  top: 0;
  right: 0;
}

.card_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card_text_on-title, .card_text_title {
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
}

.card_text_title {
  font-weight: 700;
}

.card_text_content{
  opacity: v-bind('opacity');
}

.card_text_content_sub-title {
  font-size: .85rem;
  margin-bottom: 2rem;
  line-height: 1.4rem;
  overflow: hidden;
}

.card_text_content_link {
  text-decoration: none;
  padding: 0.5rem;
  color: white;
  border: solid white 1px;
  width: fit-content;
}
</style>
