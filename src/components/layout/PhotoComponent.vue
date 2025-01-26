<script>
import SocialComponent from "@/components/widgets/SocialComponent.vue";

export default {
  name: "PhotoComponent",
  components: {
    SocialComponent
  }
}
</script>

<template>
 <div class="photo-component">
   <div class="photo-img"></div>
   <h2 class="fio">Сенников Владислав</h2>
   <div class="job">Fullstack разработчик</div>
   <SocialComponent/>
 </div>
</template>

<style scoped lang="scss">
  .photo-component {
    background-color: #1FA184;
    padding: 30px 20px 20px 20px;
    width: 250px;
    height: 345px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .photo-img {
      background: white url("@/assets/img/photo.jpg") no-repeat top -18px left 8px;
      background-size: cover;
      height: 195px;
      width: 195px;
      border-radius: 110px;
    }

    .fio {
      font-size: 18px;
      margin-top: 33px;
      font-weight: 700;
      line-height: 1.1;
    }

    .job {
      opacity: .65;
    }
  }
</style>