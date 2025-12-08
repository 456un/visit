<script>
import {encodePostGisHexWkb} from "@/api/service.js";

export default {
  name: "PostGisEncodeComponent",
  data() {
    return {
      wkbHex: null,
      isError: false,
      error: null,
    }
  },
  methods: {
    async encode() {
      this.wkbHex = null;
      this.isError = false;
      this.error = null;

      const lat = document.querySelector('input[name="lat"]').value;
      const lon = document.querySelector('input[name="lon"]').value;

      if (!lat || !lon) {
        this.error = 'не указано значение долготы или широты';
        this.isError = true;
        return false;
      }

      try {
        const data = new FormData();
        data.append("lat", lat);
        data.append("lon", lon);

        const response = await encodePostGisHexWkb(data);
        if (response.success) {
          this.wkbHex = response.data.wkbHex;

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
  <div class="label">Кодировать</div>
  <input type="text" name="lon" placeholder="Долгота (lon): 12.121545">
  <input type="text" name="lat" placeholder="Широта (lat): 35.4546546">
  <div class="result">
    <div class="success" v-show="!isError">
      <p>PostGIS WKB HEX: {{ wkbHex }}</p>
    </div>
    <div class="error" v-show="isError">
      <span class="red">Error:</span> {{ error }}
    </div>
  </div>
  <input type="button" name="decode" value="ВЫЧИСЛИТЬ" @click="encode" />
</template>

<style scoped lang="scss">
@use "@/assets/styles/service.scss";
</style>