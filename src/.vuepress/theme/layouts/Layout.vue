<template>
  <div class="theme-container">
    <Header />
    <h1>{{ $page.title }}</h1>
    <Content />
  </div>
</template>

<script>
import Header from "@theme/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
