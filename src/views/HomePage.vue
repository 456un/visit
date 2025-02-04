<script>
import BlockInfoComponent from '@/components/widgets/BlockInfoComponent.vue'
import ProgressBarComponent from "@/components/ui/ProgressBarComponent.vue";
import WorkExperienceComponent from "@/components/widgets/WorkExperienceComponent.vue";
import ReviewComponent from "@/components/widgets/ReviewComponent.vue";
import PortfolioComponent from "@/components/ui/PortfolioComponent.vue";
import FaqComponent from "@/components/ui/FaqComponent.vue";
import SocialComponent from "@/components/widgets/SocialComponent.vue";
import ContactComponent from "@/components/widgets/ContactComponent.vue";
import PhotoComponent from "@/components/layout/PhotoComponent.vue";

export default {
  name: "HomePage.vue",
  components: {
    PhotoComponent,
    BlockInfoComponent,
    ProgressBarComponent,
    WorkExperienceComponent,
    ReviewComponent,
    PortfolioComponent,
    FaqComponent,
    SocialComponent,
    ContactComponent,
  }
}
</script>

<template>
  <BlockInfoComponent class="no-padding top-block" id="#photo">
    <PhotoComponent class="photo-top"/>
  </BlockInfoComponent>
  <BlockInfoComponent id="#about">
    <h2 class="title">Про меня</h2>
    <div class="content">
      <p>Добрый день! Меня зовут Владислав Сенников, я профессиональный web-разработчик с более чем 11-летним
        коммерческим
        опытом.</p>
      <p>Я специализируюсь на создании и поддержке высоконагруженных систем, интеграции сервисов и улучшении
        существующих
        решений. Имею большой опыт построения сервисов, с нуля, по требованиям заказчика.</p>
      <p>Основные технологии: Go, PHP, Postgres, Laravel, Yii2, Symfony, Vue и др.</p>
    </div>
  </BlockInfoComponent>

  <BlockInfoComponent id="#skills">
    <h2 class="title">Скиллы</h2>
    <div class="columns">
      <div class="col">
        <div class="col-title">Языки</div>
        <ProgressBarComponent value="99" title="PHP"/>
        <ProgressBarComponent value="75" title="Go"/>
        <ProgressBarComponent value="80" title="Чистый JS"/>
        <ProgressBarComponent value="50" title="Vue"/>
      </div>
      <div class="col">
        <div class="col-title">Базы данных</div>
        <ProgressBarComponent value="99" title="Postgres"/>
        <ProgressBarComponent value="95" title="MySQL/MariaDB"/>
        <ProgressBarComponent value="80" title="MongoDB"/>
      </div>
    </div>

    <div class="columns">
      <div class="col">
        <div class="col-title">Фреймворки/CMS</div>
        <ProgressBarComponent value="99" title="Laravel"/>
        <ProgressBarComponent value="99" title="Yii2"/>
        <ProgressBarComponent value="80" title="Symfony"/>
        <ProgressBarComponent value="99" title="Битрикс24/Битрикс"/>
      </div>
      <div class="col">
        <div class="col-title">Другое</div>
        <ProgressBarComponent value="95" title="RabbitMQ"/>
        <ProgressBarComponent value="60" title="Docker"/>
        <ProgressBarComponent value="80" title="Верстка"/>
        <ProgressBarComponent value="90" title="Системный анализ"/>
      </div>
    </div>
  </BlockInfoComponent>

  <BlockInfoComponent id="#works">
    <h2 class="title">Опыт работы</h2>
    <WorkExperienceComponent startYear="2011" endYear="2013" title="Лаборант (эникей)" place="КГУ им. Н.А. Некрасова">
      Администрирование компьютерных классов, ремонт компьютеров, установка ОС, настройка и установка ПО.
    </WorkExperienceComponent>

    <WorkExperienceComponent startYear="2013" endYear="2014" title="Технолог (эникей, прикладной разработчик)"
                             place="КГУ им. Н.А. Некрасова">
      <p>Администрирование компьютерных классов, ремонт компьютеров, установка ОС, настройка и установка ПО,
        работа с дистанционной системой обучения Moodle.</p>
      <p>Разработка ПО на языке программирования C#.</p>
    </WorkExperienceComponent>

    <WorkExperienceComponent startYear="2014" endYear="2015" title="Web-программист" place="Веб-студия WSDV">
      <p>Верстка и программирование сайтов, работа с 1C-Битрикс
        (например: <a href="http://www.ecodomprom.ru/">http://www.ecodomprom.ru/</a>), работа напрямую с заказчиком.</p>
      <p>Создание сайтов визиток.</p>
    </WorkExperienceComponent>

    <WorkExperienceComponent startYear="2016" endYear="2017" title="Fullstack разработчик 1С-Битрикс"
                             place="Веб-студия Digitalwand">
      Разработка функционала различной сложности, для сайтов работающих на 1C-Битрикс и Битрикс24.
      Работа напрямую с заказчиком.
    </WorkExperienceComponent>

    <WorkExperienceComponent startYear="2017" endYear="2024" title="Ведущий бэкенд разработчик" place="SOKOLOV">
      <p>Разработка центра единой авторизации (SSO), с нуля, без ТЗ.</p>
      <p>Самостоятельная поддержка и разработка geo сервиса (работа с postgres в связке с PostGIS).</p>
      <p>Самостоятельная поддержка и доработка корпоративного портала на Битрикс24 (написание модулей,
        изменение функционала, без затрагивания ядра системы, прямая работа с БД через ORM,
        реализация своей exchange системы для интеграции с календарем outlook).</p>
      <p>Развитие сайта sokolov.ru (корзина, оплаты, каталог, авторизация, работа со скидочной системой).</p>
      <p>Командная разработка, с нуля, сервиса онлайн оплат (прямая интеграция с системами оплат: GooglePay, ApplePay,
        Сбер, СБП, Тинькофф и др.).</p>
      <p>Прямое общение с тех. поддержкой сервисов, до получения результатов.</p>
      <p>Разработка бэкенд части b2c сайта, для продажи украшений в китайском сегменте.</p>
      <p>Написание с нуля сервиса для работы с ФЗ 115.</p>
      <p>Написание сервиса для мониторинга цен на партнерских сайтах.</p>
    </WorkExperienceComponent>
  </BlockInfoComponent>

  <BlockInfoComponent id="#edicatons">
    <h2 class="title">Образование</h2>
    <WorkExperienceComponent startYear="2010" endYear="2015" title="Учитель информатики и математики"
                             place="КГУ им. Н.А. Некрасова">
    </WorkExperienceComponent>
  </BlockInfoComponent>

  <BlockInfoComponent id="#reviews">
    <h2 class="title">Отзывы</h2>
    <ReviewComponent name="Анна" link="https://freelance.ru/krinic">
      Как всегда четко и профессионально!
    </ReviewComponent>

    <ReviewComponent name="Анна" link="https://freelance.ru/krinic">
      Очень качественно выполненная работа! Исполнитель - профессионал и прекрасно разбирается в Битрикс!
    </ReviewComponent>

    <ReviewComponent name="Илья Кузнецов" link="https://freelance.ru/ilay-1">
      Сделал все быстро и профессионально! Отлично!
    </ReviewComponent>

    <ReviewComponent name="iqcon" link="https://freelance.ru/iqcon">
      Работу выполнил хорошо, советую для сотрудничества!
    </ReviewComponent>
  </BlockInfoComponent>

  <BlockInfoComponent id="#portfolio">
    <h2 class="title">Портфолио</h2>
    <div class="portfolio-columns">
      <div class="portfolio-col">
        <PortfolioComponent src="/assets/img/sso.jpg" class="portfolio-el" tabindex="1">
          SOKOLOV ID<br>SSO
        </PortfolioComponent>
        <PortfolioComponent src="/assets/img/sokolov.jpg" class="portfolio-el" tabindex="2">
          Сайт sokolov.ru
        </PortfolioComponent>
      </div>
      <div class="portfolio-col">
        <PortfolioComponent src="/assets/img/pay.jpg" class="portfolio-el" tabindex="3">
          Платежный сервис<br>SOKOLOV
        </PortfolioComponent>
        <PortfolioComponent src="/assets/img/geo.jpg" class="portfolio-el" tabindex="4">
          SOKOLOV<br>GEO
        </PortfolioComponent>
      </div>
    </div>
  </BlockInfoComponent>

  <BlockInfoComponent id="#faq">
    <h2 class="title">FAQ</h2>
    <FaqComponent question="Сколько стоят мои услуги?">
      Верстка/фронт: 2000 руб/ч.<br>
      Бэкенд: 3000 руб/ч.
    </FaqComponent>
    <FaqComponent question="Сколько стоит прямая интеграция с платежной системой?">
      MVP (минимально жизнеспособный продукт) стоит от 100к рублей, в зависимости от требований
    </FaqComponent>
    <FaqComponent question="Конфиденциальность">
      Ваши проекты не будут добавлены в портфолио, без согласования с вами.<br>
      Так же проект не будет упоминаться в личных переписках, без вашего согласия.
    </FaqComponent>
  </BlockInfoComponent>

  <BlockInfoComponent id="#contact">
    <h2 class="title">Написать мне</h2>
    <div class="contact">
      <SocialComponent/>
      <ContactComponent/>
    </div>
  </BlockInfoComponent>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.title {
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 50px;
  font-weight: 500;
}

.content {
  line-height: 1.875em;
  text-align: justify;
  font-size: 16px;
  letter-spacing: .08em;
}

.columns {
  display: flex;
  margin-bottom: 15px;

  .col {
    .col-title {
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: 700;
    }

    width: calc(50% - 30px);
    padding: 0 15px;
  }
}

.portfolio-col {
  display: flex;
}

.portfolio-col:first-child {
  .portfolio-el:first-child {
    border-top-left-radius: 8px;

    &:before {
      border-top-left-radius: 8px;
    }
  }

  .portfolio-el:last-child {
    border-top-right-radius: 8px;

    &:before {
      border-top-right-radius: 8px;
    }
  }
}

.portfolio-col:last-child {
  .portfolio-el:first-child {
    border-bottom-left-radius: 8px;

    &:before {
      border-bottom-left-radius: 8px;
    }
  }

  .portfolio-el:last-child {
    border-bottom-right-radius: 8px;

    &:before {
      border-bottom-right-radius: 8px;
    }
  }
}

.contact {
  margin-left: 8.6%;
  margin-right: 8.6%;
}

.top-block {
  display: none;
}

.no-padding {
  padding: 0;
  width: 100%;
}

.photo-top {
  width: 100%;
}

@media (max-width: 768px) {
  .top-block {
    display: block;
  }

  .columns {
    display: block;

    .col {
      width: auto;
    }
  }

  .contact {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>