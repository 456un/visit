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

      const email = this.form.email;
      const telegram = this.form.telegram;
      const message = this.form.message;

      const data = new FormData();

      if (!email && !telegram) {
        this.error = 'Укажите email или телеграм для связи с вами';
        this.isSubmitting = false;
        this.success = false;
        return;
      }

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.error = 'Email не валиден';
        this.isSubmitting = false;
        this.success = false;
        return;
      }

      if (email) {
        data.set('email', email);
      }

      if (telegram) {
        data.set('telegram', telegram);
      }

      data.set('message', message);

      try {
        // Отправка данных через API-сервис
        this.response = await sendFormData(data); // Ответ от сервера
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
        <input type="text" name="email" v-model="form.email" placeholder="Email: me@mail.ru" />
      </div>
      <div class="telegram form-el">
        <input type="text" name="telegram" v-model="form.telegram" placeholder="Имя пользователя telegram: @me"/>
      </div>
      <div class="message form-el">
        <textarea name="message" v-model="form.message" placeholder="Опишите задачу"/>
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
  margin-top: 30px;

  .form-el {
    display: flex;
    flex-direction: column;

    label {
      line-height: 2.5em;
      font-size: .82em;
      letter-spacing: .02em;
    }

    input, textarea {
      margin-top: 11px;
      color: black;
      outline: none;
      border: none;
      background: #B3DFD3;
      border-radius: 8px;
      padding: 10px 13px 9px 13px;
      font-size: 16px;
      width: calc(100% - 26px);
      height: fit-content;

      &:focus::placeholder {
        color: transparent;
      }

      &::placeholder {
        color: black;
      }

      &:disabled {
        background: #A4A4A4;
        cursor: not-allowed;
      }
    }

    textarea {
      height: 95px;
    }
  }

  .btn-block {
    position: relative;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    height: fit-content;
    margin-top: 20px;

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
      outline: none;
      border: none;
      background: black;
      color: white;
      font-size: 16px;
      text-transform: uppercase;
      border-radius: 8px;
      cursor: pointer;
      padding: 10px 14px 9px 14px;

      text-align: center;
      vertical-align: middle;
      height: fit-content;

      &.dark {
        background-color: #333333;
      }
    }
  }

  .form-block {
    display: flex;
    flex-direction: column;

    .message {
      margin-top: 8px;
    }

    .error, .success {
      margin-top: 8px;
      letter-spacing: 0.18em;
      font-size: 14px;

      span {
        color: red;
      }
    }
  }
}
</style>