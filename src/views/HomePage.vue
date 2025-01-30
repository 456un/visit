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
      Добрый день! Меня зовут Владислав Сенников, я профессиональный web-разработчик с более чем 11-летним опытом.
      Я специализируюсь на создании и поддержке высоконагруженных систем, интеграции сервисов и улучшении существующих
      решений. Основные технологии: Go, PHP, Postgres, Laravel, Yii2, Symfony, Vue и др.
    </div>
  </BlockInfoComponent>

  <BlockInfoComponent id="#skills">
    <h2 class="title">Скиллы</h2>
    <div class="columns">
      <div class="col">
        <div class="col-title">Языки</div>
        <ProgressBarComponent value="95" title="PHP"/>
        <ProgressBarComponent value="60" title="Go"/>
        <ProgressBarComponent value="60" title="Чистый JS"/>
        <ProgressBarComponent value="40" title="Vue"/>
      </div>
      <div class="col">
        <div class="col-title">Базы данных</div>
        <ProgressBarComponent value="85" title="Postgres"/>
        <ProgressBarComponent value="80" title="MySQL/MariaDB"/>
        <ProgressBarComponent value="40" title="MongoDB"/>
      </div>
    </div>

    <div class="columns">
      <div class="col">
        <div class="col-title">Фреймворки/CMS</div>
        <ProgressBarComponent value="95" title="Laravel"/>
        <ProgressBarComponent value="95" title="Yii2"/>
        <ProgressBarComponent value="70" title="Symfony"/>
        <ProgressBarComponent value="90" title="Битрикс24/Битрикс"/>
      </div>
      <div class="col">
        <div class="col-title">Другое</div>
        <ProgressBarComponent value="60" title="RabbitMQ"/>
        <ProgressBarComponent value="50" title="Docker"/>
        <ProgressBarComponent value="60" title="Верстка"/>
      </div>
    </div>
  </BlockInfoComponent>

  <BlockInfoComponent id="#works">
    <h2 class="title">Опыт работы</h2>
    <WorkExperienceComponent startYear="2011" endYear="2013" title="Лаборант" place="КГУ им. Н.А. Некрасова">
      Администрирование компьютерных классов, ремонт компьютеров, установка ОС, настройка и установка ПО
    </WorkExperienceComponent>

    <WorkExperienceComponent startYear="2013" endYear="2014" title="Технолог" place="КГУ им. Н.А. Некрасова">
      Администрирование компьютерных классов, ремонт компьютеров, установка ОС, настройка и установка ПО,
      работа с дистанционной системой обучения Moodle, разработка ПО на языке программирования C#
    </WorkExperienceComponent>

    <WorkExperienceComponent startYear="2014" endYear="2015" title="Web-программист" place="Веб-студия WSDV">
      Верстка и программирование сайтов, работа с 1C-Битрикс, создание сайтов визиток
    </WorkExperienceComponent>

    <WorkExperienceComponent startYear="2016" endYear="2017" title="Fullstack разработчик 1С-Битрикс"
                             place="Веб-студия Digitalwand">
      Разработка функционала различной сложности, для сайтов работающих на 1C-Битрикс и Битрикс24
    </WorkExperienceComponent>

    <WorkExperienceComponent startYear="2017" endYear="2024" title="Ведущий бэкенд разработчик" place="SOKOLOV">
      Разработка центра единой авторизации (SSO), поддержка и доработка geo сервиса,
      поддержка и доработка корпоративного портала на Битрикс24, развитие сайта sokolov.ru,
      разработка сервиса онлайн оплат
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