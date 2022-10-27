<template>
  <div class="theme-container">
    <Navbar />
    <h1>{{ $page.title }}</h1>
    <Content />
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style src="../styles/index.styl" lang="stylus"></style>
