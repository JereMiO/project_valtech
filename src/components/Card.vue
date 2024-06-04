<template>
  <div class="container" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <img
      :src="images.xs"
      :srcset="`${images.xs} 320w, ${images.s} 575w, ${images.m} 768w, ${images.l} 1024w, ${images.xl} 1280w`"
      :alt="onTitle"
      class="bg"
      :class="{ hovering: hovering && subTitle }"
    >
    <a
      v-if="!activateHover" href="https://github.com/JereMiO/project_valtech" target="_blank" class="link-to-github"
    >
      <img
        width="50px"
        src="/github-mark-white.svg" alt="github"
      >
    </a>
    <div class="text-centered">
      <div v-if="onTitle" class="on-title">
        {{ onTitle }}
      </div>
      <div v-if="title" class="title">
        {{ title }}
      </div>
      <div v-if="(subTitle && hovering) || !activateHover" class="sub-title">
        {{ subTitle }}
      </div>
      <div v-if="subTitle && hovering && activateHover" class="link">
        <a :href="`https://en.wikipedia.org/wiki/${title}`" target="_blank">Wikipedia</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: Images
  alt: string
  onTitle: string
  title: string
  subTitle?: string
  activateHover: boolean
}>()

interface Images {
  xs: string
  s: string
  m: string
  l: string
  xl: string
}

const hovering = ref(false)
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 1rem;
  border-radius: 7px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-height: 28rem;
  }

  .bg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hovering {
    filter: brightness(50%);
    transition: all 300ms ease-out;
  }

  .link-to-github {
    position:absolute;
    top:0;
    right:0;
  }

  .text-centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .on-title, .title {
      font-size: 1.4rem;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }

    .title {
      font-weight: 700;
    }

    .sub-title {
      font-size: .85rem;
      margin-bottom: 2rem;
      line-height: 1.4rem;
      overflow: hidden;
    }

    .link > a {
      text-decoration: none;
      padding: 0.5rem;
      color: white;
      border: solid white 1px;
      width: fit-content;
    }
  }
}
</style>
