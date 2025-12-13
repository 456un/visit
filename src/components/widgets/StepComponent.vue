<script>
import StepHeaderComponent from "@/components/ui/step/StepHeaderComponent.vue";
import StepItemComponent from "@/components/ui/step/StepItemComponent.vue";

export default {
  name: "StepComponent",
  components: {
    StepHeaderComponent,
    StepItemComponent,
  }
}
</script>

<template>
  <StepHeaderComponent>РАЗРАБОТКА</StepHeaderComponent>
  <div class="items">
    <div class="item">
      <div class="col-1">
        <StepItemComponent title="ПРОЕКТИРОВАНИЕ" price="2500 руб/ч" :myWork="true">
          <slot>
            <p>Проектирование включает себя:</p>
            <ul>
              <li>Создание прототипа сайта</li>
              <li>Разработкой структуры сайта</li>
              <li>Написании ТЗ или постановки задач</li>
            </ul>
            <p>Выполняется: заказчиком или мной совместно с заказчиком</p>
          </slot>
        </StepItemComponent>
      </div>
      <div class="col-2 arrow-right"></div>
      <div class="col-3">
        <StepItemComponent title="ДИЗАЙН" price="от 2000 (500<span class='up'>*</span>) руб/ч" :myWork="true">
          <slot></slot>
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
        <StepItemComponent title="BACKEND" price="3000 руб/ч" :myWork="true">
          <slot></slot>
        </StepItemComponent>
      </div>
      <div class="col-2 parallel"></div>
      <div class="col-3">
        <StepItemComponent title="ВЕРСТКА" price="2500 руб/ч" :myWork="true">
          <slot></slot>
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
        <StepItemComponent title="FRONTEND" price="2500 руб/ч" :myWork="true">
          <slot></slot>
        </StepItemComponent>
      </div>
    </div>
  </div>
  <StepHeaderComponent>ТЕСТИРОВАНИЕ, НАПОЛНЕНИЕ, SEO</StepHeaderComponent>
  <div class="items">
    <div class="item">
      <div class="col-1">
        <StepItemComponent title="DEV СЕРВЕР" price="2500 руб/ч" :myWork="true">
          <slot></slot>
        </StepItemComponent>
      </div>
      <div class="col-2 arrow-right"></div>
      <div class="col-3">
        <StepItemComponent title="ЗАПОЛНЕНИЕ" price="от 700 руб/ч" :myWork="false">
          <slot></slot>
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
        <StepItemComponent title="ТЕСТИРОВАНИЕ" price="от 1000 руб/ч" :myWork="false">
          <slot></slot>
        </StepItemComponent>
      </div>
      <div class="col-2 parallel"></div>
      <div class="col-3">
        <StepItemComponent title="SEO" price="от 1500 руб/ч" :myWork="true">
          <slot></slot>
        </StepItemComponent>
      </div>
    </div>
  </div>
  <StepHeaderComponent>ЗАПУСК</StepHeaderComponent>
  <div class="items">
    <div class="item">
      <div class="col-1">
        <StepItemComponent title="PROD СЕРВЕР" price="2500 руб/ч" :myWork="true">
          <slot></slot>
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
        <StepItemComponent title="ТЕСТИРОВАНИЕ" price="от 1000 руб/ч" :myWork="false">
          <slot></slot>
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
        <div class="start">ЗАПУСК</div>
      </div>
      <div class="col-2"></div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.items {
  margin-bottom: 22px;

  .item {
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
</style>