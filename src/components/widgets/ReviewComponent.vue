<script>
import ReviewItemComponent from "@/components/ui/ReviewItemComponent.vue";

export default {
  name: "ReviewComponent",
  components: {
    ReviewItemComponent,
  },
}
</script>

<template>
  <ReviewItemComponent name="Анна" type="female">
    Как всегда четко и профессионально!
  </ReviewItemComponent>

  <ReviewItemComponent name="Анна" type="female">
    Очень качественно выполненная работа! Исполнитель - профессионал и прекрасно разбирается в Битрикс!
  </ReviewItemComponent>

  <ReviewItemComponent name="Илья Кузнецов" type="male">
    Сделал все быстро и профессионально! Отлично!
  </ReviewItemComponent>

  <ReviewItemComponent name="iqcon" type="male">
    Работу выполнил хорошо, советую для сотрудничества!
  </ReviewItemComponent>

  <div class="view-block">
    <a class="view" href="https://freelance.ru/reviews/AnSm/" target="_blank" rel="noopener noreferrer">
      смотреть отзывы
    </a>
  </div>
</template>

<style scoped lang="scss">
.view-block {
  display: flex;
  margin-right: 1px;
  justify-content: end;

  .view {
    font-size: 14px;
    text-transform: lowercase;
    padding-right: 16px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    width: fit-content;
    display: block;
    background: transparent url("@/assets/img/review-arrow.png") no-repeat top 2px right;
    background-size: 14px 14px;
  }
}
</style>