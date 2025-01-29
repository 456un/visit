<script>
import {sendFormData} from "@/api/contact.js";

export default {
  name: "ContactComponent",
  data() {
    return {
      form: {
        email: '',
        telegram: '',
        message: '',
      },
      isSubmitting: false,
      error: null,
      response: null,
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.error = null;
      this.response = null;

      try {
        // Отправка данных через API-сервис
        this.response = await sendFormData(this.form); // Ответ от сервера
      } catch (err) {
        // Обработка ошибок
        this.error = err;
      } finally {
        this.isSubmitting = false;
      }
    }
  },
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="contact-component">
      <div class="email form-el">
        <label>Email</label>
        <input type="text" name="email" v-model="form.email"/>
      </div>
      <div class="telegram form-el">
        <label>Имя пользователя telegram</label>
        <input type="text" name="telegram" v-model="form.telegram"/>
      </div>
      <div class="message form-el">
        <label>Сообщение</label>
        <textarea name="message" v-model="form.message"/>
      </div>
      <button class="submit" :disabled="isSubmitting">Отправить</button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.contact-component {
  margin-top: 70px;

  .form-el {
    display: flex;
    flex-direction: column;

    label {
      line-height: 2.5em;
      font-size: .82em;
      letter-spacing: .02em;
    }

    input, textarea {
      background-color: #121F26;
      height: 20px;
      padding: 10px 15px;
      line-height: 20px;
      font-size: 14px;
      border: 1px solid transparent;
      border-radius: 8px;
      color: white;
      margin-bottom: 20px;
      outline: none;
    }

    textarea {
      height: 95px;
    }
  }

  button {
    color: #FFFFFF;
    background-color: #1FA184;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    vertical-align: middle;
    padding: 8px 25px;
    border-radius: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: auto;
    margin-right: 0;
    display: flex;
  }
}
</style>