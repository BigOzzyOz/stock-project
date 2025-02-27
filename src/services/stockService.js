import axios from "axios";

const BASE_URL = "https://sheetdb.io/api/v1/ktl34t4plpmmz";

export async function fetchStockData(sheetName) {
  try {
    const response = await axios.get(BASE_URL, { params: { sheet: '$' + sheetName } });
    return response.data;
  } catch (error) {
    console.error(`Fehler beim Abrufen der Daten für ${sheetName}:`, error);
    return null;
  }
}
