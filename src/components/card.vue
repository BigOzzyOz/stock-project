<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>

<style scoped>
.card {
  background: #011f35;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 16px;
}
</style>
