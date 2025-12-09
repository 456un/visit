<script>
export default {
  name: "FaqComponent",
  props: [
    'question',
  ],
  data() {
    return {
      isOpen: false, // Состояние открытия ответа
    };
  },
  methods: {
    toggleAnswer() {
      this.isOpen = !this.isOpen; // Переключение состояния
    },
  },
}
</script>

<template>
  <div class="faq">
    <div class="question" @click="toggleAnswer" :class="{open: isOpen}">
      <div class="text">
        {{ question }}
      </div>
    </div>
    <div class="answer" :class="{ open: isOpen }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.faq {
  .question {
    font-size: 16px;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    text-transform: uppercase;
    width: calc(100% - 20px);
    background: url("@/assets/img/arrow-open.png") no-repeat center right 15px, #1FA184;
    background-size:  15px 12px, 100% 100%;
    padding: 10px 20px;
    height: fit-content;

    .text {
      z-index: 2;
      position: relative;
    }

    &.open {
      background: url("@/assets/img/arrow-close.png") no-repeat center right 15px, #1FA184;
      background-size:  15px 12px, 100% 100%;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: 0.3s opacity;
      border-radius: 8px;
    }
  }

  .answer {
    padding: 15px 20px 0 20px;
    line-height: 1.875em;
    font-size: 16px;
    letter-spacing: 0.08em;
    transition: 0.3s max-height, 0.1s padding-bottom, 0.1s opacity;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    text-align: justify;

    &.open {
      max-height: 5000px;
      opacity: 1;
      padding-bottom: 15px;
    }
  }
}
</style>