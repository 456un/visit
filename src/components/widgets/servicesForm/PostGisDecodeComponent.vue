<script>
import {decodePostGisHexWkb} from "@/api/service.js";

export default {
  name: "PostGisDecodeComponent",
  data() {
    return {
      lat: null,
      lon: null,
      isError: false,
      error: null,
    }
  },
  methods: {
    async decode() {
      this.lat = null;
      this.lon = null;
      this.isError = false;
      this.error = null;

      const wkbHex = document.querySelector('input[name="wkbHex"]').value;

      if (!wkbHex) {
        this.error = 'не указано значение WKB HEX';
        this.isError = true;
        return false;
      }

      try {
        const data = new FormData();
        data.append("wkbHex", wkbHex);

        const response = await decodePostGisHexWkb(data);
        if (response.success) {
          this.lat = response.data.lat;
          this.lon = response.data.lon;

          return true;
        } else {
          this.error = response.data.error;
          this.isError = true;

          return false;
        }
      } catch (e) {
        this.error = e.message;
        this.isError = true;
        return false;
      }
    }
  }
}
</script>

<template>
  <div class="label">Декодировать</div>
  <div class="top-input">
    <input type="text" name="wkbHex" placeholder="HEX WKB (значение точки для PostGIS): 0101000020E6...">
    <input type="button" name="decode" value="ВЫЧИСЛИТЬ" @click="decode" />
  </div>
  <div class="result">
    <div class="success" v-show="!isError">
      <p>Долгота (lon): {{ lon }}</p>
      <p>Широта (lat): {{ lat }}</p>
    </div>
    <div class="error" v-show="isError">
      <span class="red">Error:</span> {{ error }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/service.scss";
</style>