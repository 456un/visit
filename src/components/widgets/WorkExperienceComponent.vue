<script>
import WorkExperienceBoxComponent from "@/components/ui/WorkExperienceBoxComponent.vue";
import YearsComponent from "@/components/ui/YearsComponent.vue";

export default {
  name: "WorkExperienceComponent",
  components: {
    YearsComponent,
    WorkExperienceBoxComponent,
  },
  props: [
    'startYear',
    'endYear',
    'title',
    'place',
  ],
}
</script>

<template>
  <div class="work-experience">
    <YearsComponent :startYear="startYear" :endYear="endYear"/>
    <WorkExperienceBoxComponent :title="title" :place="place">
      <slot></slot>
    </WorkExperienceBoxComponent>
  </div>
</template>

<style scoped lang="scss">
.work-experience {
  display: flex;
  margin-left: 25px;
  width: 100%;
}
</style>