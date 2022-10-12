<script setup lang="ts"></script>

<template>
  <button class="btn btn-primary">Button</button>
  <p>
    <router-link to="/">Go to Home</router-link>
    <br />
    <router-link to="/about">Go to About</router-link>
  </p>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
