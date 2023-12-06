<template>
  <div class="user">
    <h3>{{ user.name }}</h3>
    <h4>@{{ user.username }}</h4>
    <p>Email : {{ user.email }}</p>
    <p>
      <NuxtLink to="/"> List of users </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types/User";
const route = useRoute();
const { data: user }: { data: Ref<User> } = await useFetch(
  `https://jsonplaceholder.typicode.com/users/${route.params.id}`
);
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
