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
      success: null,
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.error = null;
      this.response = null;
      this.success = null;

      if (!this.form.email && !this.form.telegram) {
        this.error = 'Укажите email или телеграм для связи с вами';
        this.isSubmitting = false;
        this.success = false;
        return;
      }

      if (this.form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.error = 'Email не валиден';
        this.isSubmitting = false;
        this.success = false;
        return;
      }

      try {
        // Отправка данных через API-сервис
        this.response = await sendFormData(this.form); // Ответ от сервера
        this.success = true;
      } catch (err) {
        // Обработка ошибок
        this.error = err;
        this.success = false;
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
      <div class="form-block">
        <div class="error"><span>{{ error ? '* ' : '' }}</span>{{ error }}</div>
        <div class="message">{{ success ? 'Сообщение успешно отправлено' : '' }}</div>

        <div class="btn-block">
          <button class="submit" :class="{dark: isSubmitting}" :disabled="isSubmitting">Отправить</button>
          <div class="spinner" :class="{vis: isSubmitting}"></div>
        </div>
      </div>
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

  .btn-block {
    position: relative;
    display: flex;
    margin-left: auto;
    margin-right: 0;
    width: fit-content;
    height: fit-content;

    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      border: 3px solid #fff;
      border-top: 3px solid transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      display: none;

      &.vis {
        display: block;
      }
    }

    @keyframes spin {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
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
      height: fit-content;

      &.dark {
        background-color: #172d27;
        color: #626262;
      }
    }
  }

  .form-block {
    display: flex;

    .error, .success {
      letter-spacing: 0.18em;
      font-size: 14px;

      span {
        color: red;
      }
    }
  }
}
</style>