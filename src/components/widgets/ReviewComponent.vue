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
  <ReviewItemComponent name="Анна" link="https://freelance.ru/reviews/AnSm/" type="female">
    Как всегда четко и профессионально!
  </ReviewItemComponent>

  <ReviewItemComponent name="Анна" link="https://freelance.ru/reviews/AnSm/" type="female">
    Очень качественно выполненная работа! Исполнитель - профессионал и прекрасно разбирается в Битрикс!
  </ReviewItemComponent>

  <ReviewItemComponent name="Илья Кузнецов" link="https://freelance.ru/reviews/AnSm/" type="male">
    Сделал все быстро и профессионально! Отлично!
  </ReviewItemComponent>

  <ReviewItemComponent name="iqcon" link="https://freelance.ru/reviews/AnSm/" type="male">
    Работу выполнил хорошо, советую для сотрудничества!
  </ReviewItemComponent>
</template>

<style scoped lang="scss">

</style>