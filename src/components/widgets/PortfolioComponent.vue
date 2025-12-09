<script>
import PortfolioItemComponent from "@/components/ui/PortfolioItemComponent.vue";

export default {
  name: "PortfolioComponent",
  components: {
    PortfolioItemComponent,
  },
}
</script>

<template>
  <PortfolioItemComponent className="id" title="SOKOLOV ID (SSO)">
    Мной с нуля реализован и внедрен центр единой авторизации SOKOLOV ID. Сервис разрабатывался как единая кроссдоменная
    точка авторизации пользователей и сервисов SOKOLOV. Ближайшие аналоги: Сбер ID, Yandex ID, Google ID
  </PortfolioItemComponent>
  <PortfolioItemComponent className="geo" title="SOKOLOV GEO">
    Мной принят от аутсорс и полностью переработан сервис GEO. Сервис необходим для обработки и поиска адресов, координат,
    ближайших точек на карте от метки. Ближайший аналог: DaData
  </PortfolioItemComponent>
  <PortfolioItemComponent className="pay" title="Сервис оплат">
    В команде разработан и внедрен сервис для управления онлайн оплатами, Проведена прямая интеграция с платежными системами и банками:
    Сбер, Тинькофф, Тинькофф Долями, СБП, МКБ, PayKeeper, Apple Pay, Google Pay, Sber Pay. Открытых аналогов нет
  </PortfolioItemComponent>
  <PortfolioItemComponent className="jewerly" title="SOKOLOV">
    Работа в продуктовой команде. Зона ответственности: авторизация, проведение оплат, корзина (checkout),
    прием и обработка заказов на сайте
  </PortfolioItemComponent>
</template>

<style scoped lang="scss">

</style>