<template>
  <div class="card">
    <h3>Stock Daten für {{ sheetName }}</h3>
    <ul v-if="stocks.length">
      <li v-for="(item, index) in stocks" :key="index">
        {{ item.name }} - {{ item.price }}€
      </li>
    </ul>
    <p v-else>Keine Daten verfügbar...</p>
  </div>
</template>

<script>
import { fetchStockData } from "../services/stockService";

export default {
  name: "CardComponent",
  props: {
    sheetName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      stocks: [],
    };
  },
  async created() {
    this.stocks = await fetchStockData(this.sheetName);
    console.log(this.stocks);
  },
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
