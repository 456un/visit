<script>
import SelectCustomComponent from "@/components/ui/SelectCustomComponent.vue";

export default {
  name: "ShaHashComponent",
  data() {
    return {
      sha: null,
      isError: false,
      error: null,
    }
  },
  methods: {
    async hash() {
      this.sha = null;
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

        const response = await shaHash(data);
        if (response.success) {
          this.sha = response.data.sha;

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
  },
  components: {
    SelectCustomComponent,
  }
}
</script>

<template>
  <div class="label">Получить хэш</div>
  <div class="top-input">
    <input type="text" name="data" placeholder="Строка для хэширования">
    <input type="button" value="ВЫЧИСЛИТЬ" @click="hash" />
  </div>
  <SelectCustomComponent selectName="algo" selectDefault="sha256">
    <template #option>
      <div class="option" data-value="sha1">SHA1</div>
      <div class="option" data-value="sha224">SHA224</div>
      <div class="option" data-value="sha256">SHA256</div>
      <div class="option" data-value="sha384">SHA384</div>
      <div class="option" data-value="sha512/224">SHA512/224</div>
      <div class="option" data-value="sha512/256">SHA512/256</div>
      <div class="option" data-value="sha512">SHA512</div>
      <div class="option" data-value="sha3-224">SHA3-224</div>
      <div class="option" data-value="sha3-256">SHA3-256</div>
      <div class="option" data-value="sha3-384">SHA3-384</div>
      <div class="option" data-value="sha3-512">SHA3-512</div>
    </template>
  </SelectCustomComponent>
</template>

<style scoped lang="scss">
@use "@/assets/styles/service.scss";
</style>