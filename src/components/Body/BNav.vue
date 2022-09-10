<!-- Body Nav -->

<template>
  <nav class="flex">
    <RouterLink to="/" v-if="currentPath == '/about'">Home</RouterLink>
    <!--<RouterLink to="/about">About</RouterLink>-->
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const currentPath = computed(() => route.path);
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 1rem;
  align-items: right;
  justify-content: right;
  margin: 2rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
  padding: 0 0.5em;
}

nav a:first-of-type {
  border: 0;
}

nav a:hover {
  color: hsla(160, 100%, 37%, 0.2);
}

@media (min-width: 1024px) {
  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 2rem;
    margin-top: 1rem;
  }
}

@media (max-width: 1024px) {
  nav {
    align-items: center;
    justify-content: center;
  }
  nav a {
    padding: 0 1em;
  }
}
</style>
