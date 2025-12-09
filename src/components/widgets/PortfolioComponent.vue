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
    Мной с нуля реализован и внедрен центр единой авторизации SOKOLOV. Сервис разрабатывался как единая кроссдоменная
    точка авторизации пользователей и сервисов. Аналоги: Сбер ID, Yandex ID, Google ID
  </PortfolioItemComponent>
  <PortfolioItemComponent className="geo" title="SOKOLOV GEO">
    Мной принят от аутсорс и полностью переработан сервис GEO. Сервис необходим для обработки и поиска адресов, координат,
    ближайших точек на карте от метки. Ближайший аналог: DaData
  </PortfolioItemComponent>
  <PortfolioItemComponent className="pay" title="Сервис оплат">
    В команде разработан и внедрен сервис для онлайн платежей. Проведена прямая интеграция с платежными системами и банками:
    Сбер, Тинькофф, СБП, МКБ, PayKeeper, Apple Pay, Google Pay, Sber Pay
  </PortfolioItemComponent>
  <PortfolioItemComponent className="jewerly" title="SOKOLOV">
    Работа в продуктовой команде. Зона ответственности: авторизация, проведение оплат, корзина (checkout),
    прием и обработка заказов на сайте
  </PortfolioItemComponent>
  <PortfolioItemComponent className="bitrix24" title="Портал (Битрикс)">
    Доработка Битрикс24 для SOKOLOV. Прямые интеграции с 1С, написание собственных модулей,
    доработка LDAP, внедрение функционала в обход ядра, исправление ошибок Битрикс24, прямая работа с БД
  </PortfolioItemComponent>
</template>

<style scoped lang="scss">

</style>