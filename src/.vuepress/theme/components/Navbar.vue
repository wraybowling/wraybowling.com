<template>
  <header class="navbar">
    <router-link :to="$localePath" class="home-link">
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
      />
      <span
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >
        {{ $siteTitle }}
      </span>
    </router-link>
  </header>
</template>
