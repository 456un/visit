<script>
import SelectCustomComponent from "@/components/ui/SelectCustomComponent.vue";
import CheckCustomComponent from "@/components/ui/CheckCustomComponent.vue";
import FileCustomComponent from "@/components/ui/FileCustomComponent.vue";
import TextAreaCustomComponent from "@/components/ui/TextAreaCustomComponent.vue";
import {shaHash} from "@/api/service.js";

export default {
  name: "ShaHashComponent",
  data() {
    return {
      sha: null,
      isError: false,
      error: null,
      data: null,
      hmacCheck: false,
      algo: 'sha256',
      typeHmac: "hex",
      fileHmac: null,
    }
  },
  methods: {
    async hash() {
      this.sha = null;
      this.isError = false;
      this.error = null;

      const inText = this.data;
      const algo = this.algo;
      const isHmac = this.hmacCheck;
      let typeHmac = null;
      let hmac = null;
      let fileHmac = null;

      if (!inText || !algo) {
        this.error = 'данные не валидны';
        this.isError = true;
        return false;
      }

      if (isHmac) {
        typeHmac = this.typeHmac;

        if (!typeHmac) {
          this.error = 'данные не валидны';
          this.isError = true;
          return false;
        }

        if (typeHmac === "file") {
          fileHmac = this.fileHmac;

          if (!fileHmac) {
            this.error = 'файл hmac не указан';
            this.isError = true;
            return false;
          }
        } else {
          hmac = document.querySelector("input[name='hmac']").value;

          if (!hmac) {
            this.error = 'hmac не введен';
            this.isError = true;
            return false;
          }
        }
      }

      try {
        const data = new FormData();
        data.append("data", inText);
        data.append("algo", algo);
        data.append("isHmac", isHmac);

        if (typeHmac) {
          data.append("typeHmac", typeHmac);
        }

        if (hmac) {
          data.append("hmac", hmac);
        }

        if (fileHmac) {
          data.append("fileHmac", fileHmac);
        }

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
    CheckCustomComponent,
    FileCustomComponent,
    TextAreaCustomComponent,
  }
}
</script>

<template>
  <div class="label">Получить хэш</div>
  <div class="top-input">
    <TextAreaCustomComponent place="Строка для хэширования" areaName="data" @updateValue="data=$event"/>
    <input type="button" value="ВЫЧИСЛИТЬ" @click="hash" />
  </div>
  <SelectCustomComponent @updateValue="algo=$event" selectName="algo" selectDefault="sha256">
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
  <div class="group">
    <CheckCustomComponent @updateValue="hmacCheck=$event" label="HMAC" :isChecked="false"/>
    <SelectCustomComponent @updateValue="typeHmac=$event" selectName="type-hmac" selectDefault="hex" :isDisabled="!hmacCheck">
      <template #option>
        <div class="option" data-value="hex">Ввод через HEX (например: 1A45F0DE)</div>
        <div class="option" data-value="base64">Строка BASE64</div>
        <div class="option" data-value="base64url">Строка BASE64 URL</div>
        <div class="option" data-value="text">Текст (UTF-8)</div>
        <div class="option" data-value="file">Файл (считывается в бинарном виде)</div>
      </template>
    </SelectCustomComponent>
    <input type="text" name="hmac" placeholder="Ключ HMAC" :disabled="!hmacCheck" v-show="typeHmac !== 'file'">
    <FileCustomComponent :isDisabled="!hmacCheck" inputName="hmacFile" :isShow="typeHmac === 'file'" @updateValue="fileHmac=$event"/>
  </div>
  <div class="result">
    <div class="success" v-show="!isError">
      <p>SHA: {{ sha }}</p>
    </div>
    <div class="error" v-show="isError">
      <span class="red">Error:</span> {{ error }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/service.scss";
</style>