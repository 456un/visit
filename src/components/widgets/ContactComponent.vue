<script>
export default {
  name: "ContactComponent"
}
</script>

<template>
  <div class="contact-component">
    <div class="email form-el">
      <label>Email</label>
      <input type="text" name="email"/>
    </div>
    <div class="telegram form-el">
      <label>Имя пользователя telegram</label>
      <input type="text" name="telegram"/>
    </div>
    <div class="message form-el">
      <label>Сообщение</label>
      <textarea name="message"/>
    </div>
    <button class="submit" onclick="void(0)">Отправить</button>
  </div>
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