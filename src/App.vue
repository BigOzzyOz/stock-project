<template>
  <h1>Stock Project</h1>
  <CardComponent sheetName="AMZN" />
</template>

<script>
import CardComponent from "./components/card.vue";

export default {
  name: "App",
  components: {
    CardComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100dvh;
  width: 100dvw;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 0%, #011f35 100%) fixed;
  padding: 10%;
  color: white;
}

#app {
  display: grid;
}
</style>
