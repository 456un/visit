<script>
import StepHeaderComponent from "@/components/ui/step/StepHeaderComponent.vue";
import StepItemComponent from "@/components/ui/step/StepItemComponent.vue";

export default {
  name: "StepComponent",
  components: {
    StepHeaderComponent,
    StepItemComponent,
  },
  data() {
    return {
      showFilm: false,
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
  <div class="film" v-show="showFilm"></div>
  <StepHeaderComponent>РАЗРАБОТКА</StepHeaderComponent>
  <div class="items">
    <div class="item">
      <div class="col-1">
        <StepItemComponent title="ПОДГОТОВКА" price="2500 руб/ч" :myWork="true" @updateShowFilm="showFilm=$event"
                           link="/blog/step-planning">
          <slot>
            <p>На данном этапе производится первичная проработка требований к сайту, в идеале имеем:</p>
            <ul>
              <li>Прототип сайта</li>
              <li>Структуру сайта</li>
              <li>Что используем при разработке сайта (CMS, framework и т.п.)</li>
              <li>ТЗ или задачи для разработчика, дизайнера и т.д.</li>
            </ul>
            <p>Выполняется заказчиком или мной совместно с заказчиком</p>
          </slot>
        </StepItemComponent>
      </div>
      <div class="col-2 arrow-right"></div>
      <div class="col-3">
        <StepItemComponent title="ДИЗАЙН" price="от 2000 (500<span class='up'>*</span>) руб/ч" :myWork="true"
                           @updateShowFilm="showFilm=$event" link="/blog/design">
          <slot>
            <p>Здесь разрабатываем внешний вид сайта, админки, иконки сайта, брендбука и т.д.</p>
            <p>Выполняется дизайнером</p>
          </slot>
        </StepItemComponent>
      </div>
    </div>
    <div class="transition">
      <div class="col-1 arrow-down"></div>
      <div class="label-center">можно делать одновременно</div>
      <div class="col-3 arrow-down"></div>
    </div>
    <div class="item">
      <div class="col-1">
        <StepItemComponent title="BACKEND" price="3000 руб/ч" :myWork="true" @updateShowFilm="showFilm=$event"
                           link="/blog/backend">
          <slot>
            <p>
              Этот этап подразумевает разработку внутренней части сайта, расположенной на сервере, и к которой
              пользователь не может получить доступ из браузера.
            </p>
            <p>
              На стороне бэкенда производится обработка данных, прием заказов, проведение оплат, интеграция с 1С,
              работа с базой данных, авторизация, защита данных и т.д.
            </p>
            <p>
              Выполняется мной или бэкенд разработчиком
            </p>
          </slot>
        </StepItemComponent>
      </div>
      <div class="col-2 parallel"></div>
      <div class="col-3">
        <StepItemComponent title="ВЕРСТКА" price="2500 руб/ч" :myWork="true" @updateShowFilm="showFilm=$event"
                           link="/blog/frontend">
          <slot>
            <p>Здесь переводим дизайн в html шаблоны, которые читаются браузером</p>
            <p>Выполняется мной, верстальщиком или frontend разработчиком</p>
          </slot>
        </StepItemComponent>
      </div>
    </div>
    <div class="transition">
      <div class="col-1"></div>
      <div class="label-right"><p>делаю в один этап</p>
        <p>занимает меньше времени</p></div>
      <div class="col-3 arrow-down"></div>
    </div>
    <div class="item">
      <div class="col-1">
      </div>
      <div class="col-2"></div>
      <div class="col-3">
        <StepItemComponent title="FRONTEND" price="2500 руб/ч" :myWork="true" @updateShowFilm="showFilm=$event"
                           link="/blog/frontend">
          <slot>
            <p>На данном этапе внедряем верстку в сайт, связываем ее с бэкендом</p>
            <p>Данный этап выполняется мной или frontend разработчиком</p>
          </slot>
        </StepItemComponent>
      </div>
    </div>
  </div>
  <div class="skill-wrapper-all" :class="{show: isShowAll}">
    <StepHeaderComponent>ТЕСТИРОВАНИЕ, НАПОЛНЕНИЕ, SEO</StepHeaderComponent>
    <div class="items">
      <div class="item">
        <div class="col-1">
          <StepItemComponent title="DEV СЕРВЕР" price="2500 руб/ч" :myWork="true" @updateShowFilm="showFilm=$event"
                             link="/blog/server">
            <slot>
              <p>Здесь готовится сервер для тестирования сайта, и демонстрации его заказчику</p>
              <p>Этап может выполняться до завершения этапа backend и frontend разработки, для демонстрации текущего
                результата</p>
              <p>Выполняется мной или сисадмином</p>
            </slot>
          </StepItemComponent>
        </div>
        <div class="col-2 arrow-right"></div>
        <div class="col-3">
          <StepItemComponent title="ЗАПОЛНЕНИЕ" price="от 700 руб/ч" :myWork="false" @updateShowFilm="showFilm=$event"
                             link="/blog/content">
            <slot>
              <p>На данном этапе пишутся тексты, подбираются фотографии, решается какую информацию выводить на сайте</p>
              <p>Заполняется frontend разработчиком или менеджером/заказчиком через админку (если она есть и заполнение
                реализовано)</p>
              <p>Выполняется контент менеджером/заказчиком, при необходимости подключается frontend и/или backend
                разработчик</p>
            </slot>
          </StepItemComponent>
        </div>
      </div>
      <div class="transition">
        <div class="col-1 arrow-down"></div>
        <div class="label-center">можно делать одновременно</div>
        <div class="col-3 arrow-down"></div>
      </div>
      <div class="item">
        <div class="col-1">
          <StepItemComponent title="ТЕСТИРОВАНИЕ" price="от 1000 руб/ч" :myWork="false"
                             @updateShowFilm="showFilm=$event" link="/blog/test">
            <slot>
              <p>На этом этапе производится поиск ошибок(багов), недоработок, корректность выведенной информации,
                проверка правильности работы SEO</p>
              <p>Данный этап выполняется тестировщиком или заказчиком</p>
              <p>Самим разработчиком данный этап выполняется редко, из-за "замыленности" глаза</p>
            </slot>
          </StepItemComponent>
        </div>
        <div class="col-2 parallel"></div>
        <div class="col-3">
          <StepItemComponent title="SEO" price="от 1500 руб/ч" :myWork="false" @updateShowFilm="showFilm=$event"
                             link="/blog/seo">
            <slot>
              <p>Данный этап подразумевает оптимизацию сайта под поисковые системы (Google, Yandex), под соц. сети, все
                что связано с поиском и отображением сайта в других системах</p>
              <p>Выполняется SEO специалистом совместно с frontend, иногда backend разработчиком</p>
            </slot>
          </StepItemComponent>
        </div>
      </div>
    </div>
    <StepHeaderComponent>ЗАПУСК</StepHeaderComponent>
    <div class="items">
      <div class="item">
        <div class="col-1">
          <StepItemComponent title="PROD СЕРВЕР" price="2500 руб/ч" :myWork="true" @updateShowFilm="showFilm=$event"
                             link="/blog/server">
            <slot>
              <p>Финальный этап, где поднимается боевой сервер, сайт готовится для запуска и
                открытию для пользователей</p>
              <p>Выполняется мной или сисадмином</p>
            </slot>
          </StepItemComponent>
        </div>
        <div class="col-2"></div>
        <div class="col-3"></div>
      </div>
      <div class="transition">
        <div class="col-1 arrow-down"></div>
        <div class="col-3"></div>
      </div>
      <div class="item">
        <div class="col-1">
          <StepItemComponent title="ТЕСТИРОВАНИЕ" price="от 1000 руб/ч" :myWork="false"
                             @updateShowFilm="showFilm=$event" link="/blog/test">
            <slot>
              <p>Этап финального тестирования сайта перед запуском, заново прогоняется весь функционал,
                проверяются занесенные данные</p>
              <p>Проводится тестировщиком или заказчиком</p>
            </slot>
          </StepItemComponent>
        </div>
        <div class="col-2"></div>
        <div class="col-3">
        </div>
      </div>
      <div class="transition">
        <div class="col-1 arrow-down"></div>
        <div class="col-3"></div>
      </div>
      <div class="item">
        <div class="col-1">
          <div class="start">ЗАПУСК</div>
        </div>
        <div class="col-2"></div>
        <div class="col-3"></div>
      </div>
    </div>

    <div class="legend-block">
      <div class="legend">
        <div class="hammer">
          <div class="icon"></div>&nbsp;—&nbsp;услуга может оказываться мной или отдельно нанятым специалистом с вашей
          стороны
        </div>
        <div class="one-star">*&nbsp;—&nbsp;могу выполнить дизайн за указанную цену</div>
        <div class="two-star">**&nbsp;—&nbsp;указаны средние цены middle специалистов (junior → middle → senior,
          <RouterLink to="/blog/develop-level">подробнее про уровни</RouterLink>)
        </div>
      </div>
    </div>
  </div>
  <div class="show-all" :class="{hide: isShowAll}">
    <div class="show-all-btn" @click="showAll">
      <div class="label-btn">больше информации</div>
      <div class="img-btn"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  -webkit-tap-highlight-color: transparent;
}

.film {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9;
  background: black;
  opacity: 0.85;
  top: 0;
  left: 0;
}

.items {
  margin-bottom: 22px;

  .item {
    position: relative;
    display: flex;

    .start {
      width: 100%;
      border-radius: 8px;
      background: #1FA184;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .col-1, .col-3 {
      width: 43.8%;
    }

    .col-2 {
      width: 12.4%;

      &.arrow-right {
        background: transparent url("@/assets/img/step-right.png") no-repeat center center;
        background-size: 59px 59px;
      }

      &.parallel {
        background: transparent url("@/assets/img/step-parallel.png") no-repeat center center;
        background-size: 29px 68px;
      }
    }
  }

  .transition {
    display: flex;
    position: relative;
    width: 100%;
    margin: 20px 0;
    height: 59px;

    .col-1, .col-3 {
      width: 43.8%;
      height: 100%;

      &.arrow-down {
        background: transparent url("@/assets/img/step-down.png") no-repeat center center;
        background-size: 59px 59px;
      }
    }

    .col-1 {
      margin: 0 auto 0 0;
    }

    .col-3 {
      margin: 0 0 0 auto;
    }

    .label-center, .label-right {
      position: absolute;
      z-index: 5;
      background: #1FA184;
      width: 270px;
      height: 35px;
      border-radius: 8px;
      left: calc(50% - 135px);
      bottom: -6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    .label-right {
      height: 53px;
      left: calc(50% - 76px);
      top: 3px;

      p {
        margin: 0;
      }
    }
  }
}

.legend-block {
  position: relative;

  .legend {
    width: calc(100% - 24px);
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 12px;
    background: #1FA184;
    border-radius: 8px;
    font-size: 12px;

    .hammer {
      height: fit-content;

      .icon {
        display: inline;
        height: 11px;
        padding-left: 11px;
        background: transparent url("@/assets/img/hammer2.png") no-repeat top 2px left;
        background-size: 11px 11px;
      }
    }

    .one-star {
      margin-top: 9px;
    }

    .two-star {
      margin-top: 9px;
    }

    a {
      color: white;
      text-decoration: underline;
    }
  }
}

@media (max-width: 1024px) {
  .items {
    .item {
      .col-2 {
        &.arrow-right {
          background-size: 25px 25px;
        }

        &.parallel {
          background-size: 11.5px 34px;
        }
      }
    }

    .transition {
      .col-1, .col-3 {
        &.arrow-down {
          background-size: 25px 25px;
        }
      }

      .label-center {
        font-size: 11px;
        width: 130px;
        left: calc(50% - 65px);
        height: fit-content;
        text-align: center;
        padding: 5px 0;
      }

      .label-right {
        font-size: 11px;
        width: 150px;
        text-align: center;
        left: calc(50% - 90px);
      }
    }
  }
}

.show-all {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  &.hide {
    display: none;
  }

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

.skill-wrapper-all {
  display: block;
  max-height: 0;
  transition: max-height 2s, opacity 2s;
  opacity: 0;
  visibility: hidden;

  &.show {
    max-height: 5000px;
    opacity: 1;
    visibility: visible;
  }
}
</style>