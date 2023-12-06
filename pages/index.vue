<template>
  <div class="container">
    # Wray Bowling ## Essays 1. [A 30 Card Sort](/essays/30-card-sort/) 2. [The
    Ultimate Content Filter](/essays/ultimate-content-filter) 3. [A 3-Way Range
    Input](/essays/triangular-range-input/) ## Well, here we are My name is
    Wray. The W is silent. I've been doing web development for
    <since time="1 Aug 2000 2:30:00 GMT-0400 (EDT)" />. This is my new web site
    where I divulge deeply on my methods, processes, projects, and the people
    who have helped me make it all happen. Writing and development is done in
    the open using Github, Netlify, Vuepress, & Markdown. [You can contribute by
    proof-reading future
    content.](https://github.com/wraybowling/wraybowling.com/pulls) But wait!
    There's more! I'm looking for new work; [my CV is a web page](/cv.md).

    <h2>Users</h2>
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="'/projects/' + user.id">
          {{ user.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type User = {
  id: number;
  name: string;
  email: string;
};
const { data: users }: { data: Ref<User[]> } = await useFetch(
  "https://jsonplaceholder.typicode.com/users"
);
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
.users {
  list-style-type: none;
}
.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>
