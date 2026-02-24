<script>
import { ref } from 'vue';

export default {
  name: "FooterContactItemComponent",
  props: [
      'label',
      'link',
      'text',
      'mAuto',
  ],
  data() {
    return {
      isCopy: false,
    };
  },
  methods: {
    copyToClipboard() {
      this.isCopy = true;

      navigator.clipboard.writeText(this.text);

      setTimeout(() => {
        this.isCopy = false;
      }, 1500);
    },
  },
}
</script>

<template>
  <div class="contact-item-component">
    {{ label }}:&nbsp;<a :href="link" target="_blank">{{ text }}</a>
    <div class="copy" :class="{success: isCopy, 'm-auto': mAuto}" title="Копировать" @click="copyToClipboard"></div>
    <span v-if="isCopy" class="tooltip">скопировано</span>
  </div>
</template>

<style scoped lang="scss">
.contact-item-component {
  display: flex;
  font-size: 16px;
  margin-top: 12px;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
    color: white;
  }

  .copy {
    width: 25px;
    height: 25px;
    background: transparent url("@/assets/img/copy.png") no-repeat center center;
    background-size: 25px 25px;
    cursor: pointer;
    margin-left: 54px;

    &.m-auto {
      margin-left: auto;
    }

    &.success {
      background: transparent url("@/assets/img/copy-success-2.png") no-repeat center center;
      background-size: 25px 25px;
    }
  }

  .tooltip {
    position: absolute;
    top: -15px;
    right: 10px;
    background: #000;
    color: #fff;
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 12px;
    white-space: nowrap;
  }
}

@media (max-width: 1023px) {
  .contact-item-component {
    font-size: 14px;
  }
}
</style>