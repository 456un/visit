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
    <div class="question" @click="toggleAnswer">
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
    font-size: 14px;
    line-height: 1.1;
    cursor: pointer;
    padding: 10px;
    position: relative;
    background: #1FA184;
    border-radius: 8px;
    text-transform: uppercase;
    width: calc(100% - 20px);

    .text {
      z-index: 2;
      position: relative;
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

    &:hover {
      &:before {
        opacity: 1;
        background: rgba(0, 0, 0, 0.3); /* Черный полупрозрачный слой */
        z-index: 1;
      }
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
      max-height: 1000px;
      opacity: 1;
      padding-bottom: 15px;
    }
  }
}
</style>