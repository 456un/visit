<script>
import Bitrix24ModuleItem from "@/components/ui/Bitrix24ModuleItem.vue";

export default {
  name: "Bitrix24Modules",
  components: {
    Bitrix24ModuleItem,
  },
}
</script>

<template>
  <div class="bitrix24-modules-items">
    <div class="item">
      <Bitrix24ModuleItem
          title="Глобальное удаление сообщений у определенных пользователей в веб-мессенджере"
          link="https://marketplace.1c-bitrix.ru/solutions/devnode.globalclearmessage/"
          price="30 000 руб/год"
      >
        <p>
          Данный модуль предназначен для полного удаления сообщений в веб-мессенджере у выбранных сотрудников. Он
          помогает снизить риск утечки чувствительной информации из переписки, особенно для сотрудников, занимающих
          ключевые должности в компании.
        </p>
        <p>Модуль позволяет гибко настраивать область применения:</p>
        <ul>
          <li>выбирать отдельных сотрудников;</li>
          <li>задавать отделы и группы пользователей;</li>
          <li>настраивать период хранения сообщений (количество дней, в течение которых сообщения сохраняются и не
            удаляются);
          </li>
        </ul>
        <p>
          Решение будет особенно полезно для служб информационной безопасности (СИБ), а также для топ-менеджмента и
          руководителей компаний, заинтересованных в защите корпоративной информации.
        </p>
      </Bitrix24ModuleItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bitrix24-modules-items {
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  margin-top: 28px;

  ul {
    li:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  p {
    margin: 0 0 21px 0;
  }
}
</style>