<template>
  <div id="app" style="background:#F9F9ED">
    <custom-map></custom-map>
  </div>
</template>

<script>
import CustomMap from "./components/CustomMap.vue";

export default {
  name: "App",
  components: {
    CustomMap,
  },
};
</script>

<style src="./assets/tailwind.css">
