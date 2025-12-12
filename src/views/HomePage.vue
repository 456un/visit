<script>
import BlockInfoComponent from '@/components/widgets/BlockInfoComponent.vue'
import ProgressBarComponent from "@/components/ui/ProgressBarComponent.vue";
import WorkExperienceComponent from "@/components/widgets/WorkExperienceComponent.vue";
import ReviewComponent from "@/components/widgets/ReviewComponent.vue";
import FaqComponent from "@/components/ui/FaqComponent.vue";
import SocialComponent from "@/components/widgets/SocialComponent.vue";
import ContactComponent from "@/components/widgets/ContactComponent.vue";
import PhotoComponent from "@/components/layout/PhotoComponent.vue";
import SkillsBlockComponent from "@/components/widgets/SkillsBlockComponent.vue";
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import DesignComponent from "@/components/widgets/DesignComponent.vue";
import PortfolioComponent from "@/components/widgets/PortfolioComponent.vue";
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
    FaqComponent,
    SocialComponent,
    ContactComponent,
    SkillsBlockComponent,
    DownloadSkillsComponent,
    DesignComponent,
    PortfolioComponent,
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
      <p>Добрый день!</p>
      <p>Меня зовут Владислав Сенников, я профессиональный web-разработчик, с более чем 11-летним
        коммерческим опытом в области B2C разработки веб сервисов и сайтов.</p>
      <p>Я специализируюсь на написании и интеграции сложных веб сервисов и сайтов, создаю и поддерживаю высоконагруженные
        системы, оптимизацию существующие решения, перестраиваю архитектуры сервисов, чищу и привожу в читаемый вид
        код, который написан ИИ и junior разработчиками. Без проблем напишу сервис с нуля.</p>
      <p>В основном занимаюсь бэкенд разработкой сервисов на PHP и Go. Но так же практикую фронтенд разработку,
        как на Vue, так и на чистом JS, CSS, SCSS</p>
      <p>Ищу клиентов для постоянного сотрудничества. Так же работаю с юр. лицами как самозанятый.</p>
      <p>Не работаю со срочными заказами.</p>
      <p>Ставка:</p>
      <ul>
        <li>Backend (написание кода на стороне сервера): 3000 руб/ч.</li>
        <li>Frontend/Верстка/Администрирование сервера и другое: 2500 руб/ч.</li>
        <li>Дизайн (как хобби, только в свободное время): 500 руб/ч.</li>
      </ul>
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
            <ProgressBarComponent value="90" title="Чистый JS"/>
            <ProgressBarComponent value="50" title="Vue"/>
            <ProgressBarComponent value="30" title="Python"/>
          </div>
          <div class="col">
            <div class="col-title">Базы данных</div>
            <ProgressBarComponent value="99" title="Postgres"/>
            <ProgressBarComponent value="99" title="MySQL/MariaDB"/>
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
            <ProgressBarComponent value="99" title="Slim"/>
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
            <ProgressBarComponent value="99" title="Grok"/>
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
            <div class="col-title">Работа с изображениями</div>
            <ProgressBarComponent value="99" title="Квантование изображений через код"/>
            <ProgressBarComponent value="90" title="PHP GZ"/>
            <ProgressBarComponent value="80" title="PHP imagick"/>
            <ProgressBarComponent value="50" title="Go OpenCV"/>
            <ProgressBarComponent value="30" title="Go YOLO"/>
          </div>
        </div>
        <div class="columns">
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
    <WorkExperienceComponent />
  </BlockInfoComponent>

  <BlockInfoComponent id="#reviews">
    <h2 class="title">Отзывы</h2>
    <ReviewComponent />
  </BlockInfoComponent>

  <BlockInfoComponent id="#portfolio">
    <h2 class="title">Портфолио</h2>
    <PortfolioComponent />
  </BlockInfoComponent>

  <BlockInfoComponent id="#design">
    <h2 class="title">Дизайн</h2>
    <DesignComponent/>
  </BlockInfoComponent>

  <BlockInfoComponent id="#faq">
    <h2 class="title">FAQ</h2>
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
          <p>Наем fulltime разработчика включает</p>
          <ul>
            <li>Выплаты за нерабочее время (отпуска, больничные)</li>
            <li>Социальные гарантии и налоги</li>
            <li>Простои и неэффективное время в рабочем процессе</li>
          </ul>
          <p>В почасовой работе этого нет, но ставка компенсирует непредсказуемость загрузки и необходимость
            самостоятельно обеспечивать себя работой.</p>
        </li>
      </ol>
      <p>Почасовая ставка = чистое время работы над задачей, а fulltime включает неэффективные периоды работы.
        Поэтому в пересчёте на результаты почасовой оплаты, фриланс разработчик выгоднее fulltime разработчика.</p>
    </FaqComponent>
    <FaqComponent question="Сколько стоит прямая интеграция с платежной системой?">
      MVP (минимально жизнеспособный продукт) стоит от 100к рублей, в зависимости от требований
    </FaqComponent>
    <FaqComponent question="Конфиденциальность">
      Ваши проекты не будут добавлены в портфолио, без согласования с вами.<br>
      Так же проект не будет упоминаться в личных переписках, без вашего согласия.<br>
      Код проекта не подлежит разглашению.<br>
      При необходимости заключается NDA договор.<br>
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

ul, ol {
  padding-left: 25px;
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
  text-align: left;
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

.contact {
  margin: 0 40px;
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