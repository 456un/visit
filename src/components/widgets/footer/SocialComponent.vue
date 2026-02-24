<script>
export default {
  name: "SocialComponent"
}
</script>

<template>
  <div class="social-component">
    <div class="title">Соц. сети</div>
    <div class="social-group">
      <div class="group-title">Для разработчиков</div>
      <div class="social-item">
        ВК:&nbsp;<a href="https://vk.com/dev_node_service" target="_blank">https://vk.com/dev_node_service</a>
      </div>
      <div class="social-item">
        Telegram:&nbsp;<a href="https://t.me/dev_node_service" target="_blank">https://t.me/dev_node_service</a>
      </div>
    </div>
    <div class="social-group">
      <div class="group-title">Для бизнеса</div>
      <div class="social-item">
        ВК:&nbsp;<a href="https://vk.com/dev_node" target="_blank">https://vk.com/dev_node</a>
      </div>
      <div class="social-item">
        Telegram:&nbsp;<a href="https://t.me/dev_node0" target="_blank">https://t.me/dev_node0</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.social-component {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 4px;
  width: max-content;

  a {
    text-decoration: none;
    color: white;
  }

  .social-group {
    margin-top: 19px;

    .social-item {
      margin-top: 8px;
    }
  }
}

@media (max-width: 1023px) {
  .social-component {
    margin-top: 22px;

    .title {
      font-size: 20px;
    }

    .social-group {
      margin-top: 10px;
      margin-bottom: 18px;
      font-size: 14px;
    }
  }
}
</style>