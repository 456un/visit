<script>
import WorkExperienceItemComponent from "@/components/ui/WorkExperienceItemComponent.vue";

export default {
  name: "WorkExperienceComponent",
  components: {
    WorkExperienceItemComponent,
  },
  data() {
    return {
      isShowAll: false,
    }
  },
  methods: {
    showAll() {
      this.isShowAll = true;
    },
  },
}
</script>

<template>
  <div class="work-experience-component">
    <div class="line"></div>
    <WorkExperienceItemComponent startYear="2017" endYear="2024" title="Ведущий бэкенд разработчик" place="SOKOLOV">
      <p>Разработка центра единой авторизации (SSO), с нуля, без четких требований.</p>
      <p>Самостоятельная поддержка и разработка geo сервиса (работа с postgres в связке с PostGIS).</p>
      <p>Самостоятельная поддержка и доработка корпоративного портала на Битрикс24 (написание модулей,
        изменение функционала, без затрагивания ядра системы, прямая работа с БД через ORM,
        реализация своей exchange системы для интеграции с календарем outlook, прямая интеграция с 1С).</p>
      <p>Развитие сайта sokolov.ru (корзина (checkout), оплаты, каталог, авторизация, работа со скидочной системой).</p>
      <p>Командная разработка, с нуля, сервиса онлайн оплат (прямая интеграция с системами оплат: GooglePay, ApplePay,
        Сбер, СБП, Тинькофф и др.).</p>
      <p>Прямое общение с тех. поддержкой сервисов, до получения результата.</p>
      <p>Разработка бэкенд части b2c сайта, для продажи украшений в китайском сегменте.</p>
      <p>Написание с нуля сервиса для работы с ФЗ 115.</p>
      <p>Написание сервиса для мониторинга цен на партнерских сайтах.</p>
    </WorkExperienceItemComponent>

    <div class="all" :class="{show: isShowAll}">
      <div class="climbing" :class="{show: isShowAll}"></div>
      <WorkExperienceItemComponent startYear="2016" endYear="2017" title="Разработчик 1С-Битрикс"
                                   place="Веб-студия Digitalwand">
        Разработка функционала различной степени сложности на 1C-Битрикс и Битрикс24.
        Прямая работа с заказчиком.
      </WorkExperienceItemComponent>

      <WorkExperienceItemComponent startYear="2014" endYear="2015" title="Web-программист" place="Веб-студия WSDV">
        <p>Разработка сайтов на 1C-Битрикс
          (например: <a href="http://www.ecodomprom.ru/">ecodomprom.ru</a>), прямая работа с заказчиком.</p>
        <p>Создание сайтов визиток.</p>
      </WorkExperienceItemComponent>

      <WorkExperienceItemComponent startYear="2013" endYear="2014" title="Технолог (эникей, разработчик)"
                                   place="КГУ&nbsp;им.&nbsp;Н.А.  Некрасова">
        <p>Сопровождение компьютерных классов, ремонт компьютеров, установка ОС, настройка и установка ПО,
          работа с дистанционной системой обучения Moodle.</p>
        <p>Разработка ПО на языке программирования C#.</p>
      </WorkExperienceItemComponent>

      <WorkExperienceItemComponent startYear="2011" endYear="2013" title="Лаборант (эникей)"
                                   place="КГУ им. Н.А. Некрасова">
        Сопровождение компьютерных классов, ремонт компьютеров, установка ОС, настройка и установка ПО.
      </WorkExperienceItemComponent>
    </div>
  </div>
  <div class="show-all" v-show="!isShowAll">
    <div class="show-all-btn" @click="showAll">
      <div class="label-btn">подробнее</div>
      <div class="img-btn"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-experience-component {
  position: relative;

  .all {
    max-height: 0;
    opacity: 0;
    transition: max-height ease 5s, opacity ease 1s, margin-top ease 1s;
    margin-top: -50px;
    position: relative;

    &.show {
      margin-top: 0;
      opacity: 1;
      max-height: 9000px;
    }
  }

  .line {
    position: absolute;
    width: 2px;
    height: calc(100% - 24px);
    background: #1FA184;
    background-size: 100% 100%;
    right: 25px;
    z-index: 3;
    top: 10px;
    bottom: 14px;
  }

  .climbing {
    position: absolute;
    width: 25px;
    height: 25px;
    background: transparent url("@/assets/img/climbing.png") no-repeat center center;
    background-size: 25px 25px;
    right: 14px;
    top: -37px;
    z-index: 4;
    opacity: 0;
    transition: opacity ease 3s;

    &.show {
      opacity: 1;
    }
  }

  p {
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: white;

    &:focus {
      text-decoration: none;
      color: white;
    }
  }
}

.show-all {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: relative;
  z-index: 5;

  .show-all-btn {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    .label-btn {
      font-size: 14px;
    }

    .img-btn {
      background: transparent url("@/assets/img/down.png") no-repeat center center;
      background-size: 20px 20px;
      width: 20px;
      height: 20px;
      margin-top: 5px;
    }
  }
}
</style>