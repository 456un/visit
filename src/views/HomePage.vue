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
import SkillsBlockComponent from "@/components/widgets/SkillsBlockComponent.vue";
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import {useHead} from "@vueuse/head";

export default {
  name: "HomePage.vue",
  setup() {
    useHead({
      title: "Fullstack разработчик Владислав Сенников – Разработка, интеграция, оптимизация",
      meta: [
        {
          name: "description",
          content: "Владислав Сенников – профессиональный fullstack разработчик. Разработка и интеграция веб-приложений на PHP, Go, Vue, Laravel и PostgreSQL.",
        },
        {
          property: "keywords",
          content: "fullstack разработчик, PHP, Go, PostgreSQL, Laravel, Vue, веб-разработка, интеграция сервисов",
        },
        {
          property: "canonical",
          content: "https://dev-node.ru/",
        },
        {
          property: "og:title",
          content: "Fullstack разработчик Владислав Сенников",
        },
        {
          property: "og:description",
          content: "Разработка и поддержка высоконагруженных систем. Интеграция сервисов, бэкенд на Go и PHP.",
        },
        {
          property: "og:image",
          content: "https://dev-node.ru/assets/img/avatar.jpg",
        },
        {
          property: "og:url",
          content: "https://dev-node.ru/",
        },
        {
          property: "og:type",
          content: "website",
        },
      ]
    });
  },
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
    SkillsBlockComponent,
    DownloadSkillsComponent,
  }
}
</script>

<template>
  <BlockInfoComponent class="no-padding top-block" id="#photo">
    <PhotoComponent class="photo-top"/>
    <DownloadSkillsComponent class="download-skills-top"/>
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
    <SkillsBlockComponent>
      <template #main>
        <div class="columns">
          <div class="col">
            <div class="col-title">Языки</div>
            <ProgressBarComponent value="99" title="PHP"/>
            <ProgressBarComponent value="75" title="Go"/>
            <ProgressBarComponent value="80" title="Чистый JS"/>
            <ProgressBarComponent value="50" title="Vue"/>
            <ProgressBarComponent value="30" title="Python"/>
          </div>
          <div class="col">
            <div class="col-title">Базы данных</div>
            <ProgressBarComponent value="99" title="Postgres"/>
            <ProgressBarComponent value="95" title="MySQL/MariaDB"/>
            <ProgressBarComponent value="80" title="MongoDB"/>
            <ProgressBarComponent value="70" title="Couchbase"/>
            <ProgressBarComponent value="60" title="MSSQL"/>
          </div>
        </div>

        <div class="columns">
          <div class="col">
            <div class="col-title">Фреймворки/CMS</div>
            <ProgressBarComponent value="99" title="Laravel/Lumen"/>
            <ProgressBarComponent value="99" title="Yii2"/>
            <ProgressBarComponent value="80" title="Symfony"/>
            <ProgressBarComponent value="99" title="Битрикс24/Битрикс"/>
            <ProgressBarComponent value="90" title="Slim"/>
            <ProgressBarComponent value="30" title="Django"/>
          </div>
          <div class="col">
            <div class="col-title">Другое</div>
            <ProgressBarComponent value="95" title="RabbitMQ"/>
            <ProgressBarComponent value="60" title="Docker"/>
            <ProgressBarComponent value="80" title="Верстка"/>
            <ProgressBarComponent value="90" title="Системный анализ"/>
          </div>
        </div>
      </template>
      <template #all>
        <div class="columns">
          <div class="col">
            <div class="col-title">Фронт/верстка</div>
            <ProgressBarComponent value="99" title="HTML"/>
            <ProgressBarComponent value="80" title="SASS/SCSS/CSS"/>
            <ProgressBarComponent value="40" title="React"/>
            <ProgressBarComponent value="80" title="JQuery"/>
            <ProgressBarComponent value="80" title="Bootstrap"/>
          </div>
          <div class="col">
            <div class="col-title">Безопасность</div>
            <ProgressBarComponent value="90" title="XSS"/>
            <ProgressBarComponent value="90" title="SQL инъекции"/>
            <ProgressBarComponent value="50" title="RCE/эксплойты"/>
            <ProgressBarComponent value="90" title="LFI/RFI/PHP-инъекции"/>
          </div>
        </div>
        <div class="columns">
          <div class="col">
            <div class="col-title">Кэш</div>
            <ProgressBarComponent value="99" title="Redis"/>
            <ProgressBarComponent value="99" title="Memcached"/>
          </div>
          <div class="col">
            <div class="col-title">Авторизация</div>
            <ProgressBarComponent value="99" title="JWT"/>
            <ProgressBarComponent value="99" title="JWE"/>
            <ProgressBarComponent value="99" title="OAuth"/>
          </div>
        </div>
        <div class="columns">
          <div class="col">
            <div class="col-title">Шифрование/хеширование</div>
            <ProgressBarComponent value="99" title="MD5"/>
            <ProgressBarComponent value="99" title="AES"/>
            <ProgressBarComponent value="99" title="RSA"/>
            <ProgressBarComponent value="99" title="BCrypt"/>
            <ProgressBarComponent value="99" title="Argon2"/>
          </div>
          <div class="col">
            <div class="col-title">ИИ</div>
            <ProgressBarComponent value="99" title="ChatGpt"/>
            <ProgressBarComponent value="99" title="DeepSeek"/>
            <ProgressBarComponent value="99" title="Kandinsky"/>
          </div>
        </div>
        <div class="columns">
          <div class="col">
            <div class="col-title">Postgres</div>
            <ProgressBarComponent value="99" title="Типы"/>
            <ProgressBarComponent value="99" title="Ключи/индексы"/>
            <ProgressBarComponent value="99" title="PostGIS"/>
            <ProgressBarComponent value="99" title="Построение структуры"/>
            <ProgressBarComponent value="99" title="Представления"/>
            <ProgressBarComponent value="99" title="Процедуры/функции"/>
            <ProgressBarComponent value="99" title="Тригеры"/>
            <ProgressBarComponent value="99" title="Жадная загрузка"/>
          </div>
          <div class="col">
            <div class="col-title">PHP</div>
            <ProgressBarComponent value="99" title="ООП"/>
            <ProgressBarComponent value="99" title="DDD"/>
            <ProgressBarComponent value="99" title="Callback функции"/>
            <ProgressBarComponent value="99" title="Паттерны проектирования"/>
            <ProgressBarComponent value="99" title="Рефлексия"/>
            <ProgressBarComponent value="99" title="APCu"/>
            <ProgressBarComponent value="99" title="MVC"/>
            <ProgressBarComponent value="80" title="Swoole"/>
          </div>
        </div>
        <div class="columns">
          <div class="col">
            <div class="col-title">Битрикс24/Битрикс</div>
            <ProgressBarComponent value="99" title="Шаблоны"/>
            <ProgressBarComponent value="99" title="Компоненты"/>
            <ProgressBarComponent value="99" title="Модули"/>
            <ProgressBarComponent value="99" title="Rest API"/>
            <ProgressBarComponent value="99" title="Кэширование"/>
            <ProgressBarComponent value="99" title="Инфоблоки"/>
            <ProgressBarComponent value="99" title="HighLoad блоки"/>
            <ProgressBarComponent value="99" title="ORM"/>
            <ProgressBarComponent value="99" title="D7"/>
            <ProgressBarComponent value="95" title="LDAP"/>
            <ProgressBarComponent value="95" title="Push/pull"/>
            <ProgressBarComponent value="95" title="Прямая работа с БД"/>
          </div>
          <div class="col">
            <div class="col-title">Другое</div>
            <ProgressBarComponent value="99" title="Git"/>
            <ProgressBarComponent value="70" title="LDAP"/>
            <ProgressBarComponent value="80" title="SOAP/XML"/>
            <ProgressBarComponent value="60" title="Comet"/>
            <ProgressBarComponent value="99" title="PhpUnit"/>
            <ProgressBarComponent value="75" title="Linux"/>
            <ProgressBarComponent value="99" title="Трекеры задач"/>
            <ProgressBarComponent value="99" title="Изучение новых технологий"/>
          </div>
        </div>
      </template>
    </SkillsBlockComponent>
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
      Бэкенд: 2700 руб/ч.
    </FaqComponent>
    <FaqComponent question="Почему почасовая ставка не рассчитывается как 8ч * ставка?">
      <ol>
        <li>
          <p>Фокусированное рабочее время</p>
          <p>Разработчик на фуллтайме продуктивно работает над задачами в среднем 3-4 часа в день. Остальное время
            уходит на:</p>
          <ul>
            <li>Разбор требований и обсуждения</li>
            <li>Взаимодействие с командой/клиентом</li>
            <li>Контекстные переключения между задачами</li>
          </ul>
          <p>Это естественный процесс, подтвержденный исследованиями продуктивности: мозг не может работать на пике 8
            часов подряд.</p>
        </li>
        <li>
          <p>Гибкость почасовой работы</p>
          <p>Когда специалист берёт почасовую задачу, он тратит только чистое время на неё. При этом:</p>
          <ul>
            <li>Он может сразу подключиться, а не ждать очереди задач</li>
            <li>Не несёт обязательств по совещаниям и внутренним процессам компании</li>
            <li>Быстрее выполняет задачи, так как нет отвлекающих факторов</li>
          </ul>
          <p>Это означает, что стоимость одного часа выше, но он реально посвящён работе</p>
        </li>
        <li>
          <p>Ставка учитывает рыночные условия</p>
          <p>Наем фуллтайм-разработчика включает</p>
          <ul>
            <li>Выплаты за нерабочее время (отпуска, больничные)</li>
            <li>Социальные гарантии и налоги</li>
            <li>Простои и неэффективное время в рабочем процессе</li>
          </ul>
          <p>В почасовой работе этого нет, но ставка компенсирует непредсказуемость загрузки и необходимость
            самостоятельно обеспечивать себя работой.</p>
        </li>
      </ol>
      <p>Почасовая ставка = чистое время работы над задачей, а фуллтайм включает неэффективные периоды работы.
        Поэтому в пересчёте на результат почасовой оплаты, разработчик может быть даже выгоднее.</p>
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
  width: 100%;

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
    background: transparent;
  }

  .download-skills-top {
    width: 100%;
    margin-bottom: 50px;
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