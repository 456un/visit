<script>
export default {
  name: "DownloadSkillsComponent",
}
</script>

<template>
  <div class="download-skills">
    <div class="btn-title">Все навыки</div>
    <a class="btn" href="/assets/upload/skills.xlsx">
      <div class="btn-text">Скачать</div>
      <div class="btn-label">xlsx</div>
    </a>
  </div>
</template>

<style scoped lang="scss">
.download-skills {
  display: flex;
  flex-direction: column;
  margin: 25px auto 0 auto;
  background: #313C42;
  border-radius: 8px;
  padding: 15px 20px;

  .btn-title {
    text-align: center;
    text-transform: uppercase;
  }

  .btn {
    display: block;
    text-align: center;
    width: 100%;
    height: fit-content;
    margin: 3px auto 0 auto;
    padding: 4px 0;
    border-radius: 40px;
    background-color: #1FA184;
    cursor: pointer;
    outline: none;
    border: none;
    text-decoration: none;
    color: white;

    .btn-text {
      text-transform: uppercase;
    }

    .btn-label {
      font-size: 12px;
    }
  }
}
</style>