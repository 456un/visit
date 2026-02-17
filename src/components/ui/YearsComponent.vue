<script>
export default {
  name: "YearsComponent",
  props: [
    'startYear',
    'endYear',
  ],
}
</script>

<template>
  <div class="years-component">
    {{ startYear }} &mdash; {{ endYear }}
  </div>
</template>

<style scoped lang="scss">
.years-component {
  white-space: nowrap;
  padding: 8px 15px;
  background: #1FA184;
  font-size: 0.875em;
  text-align: center;
  width: 160px;
  margin-left: 0;
  margin-right: auto;
  position: relative;
  height: 34px;
  margin-bottom: 5px;
  display: block;
  box-sizing: border-box;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: -22px;
    width: 0;
    height: 0;
    border-top: 17px solid transparent;
    border-bottom: 17px solid transparent;
    border-left: 20px solid #1FA184;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: -22px;
    transform: translate(50%, -50%);
    width: 3px;
    height: 3px;
    background-color: white;
    border-radius: 50%;
    z-index: 1;
  }
}

@media (max-width: 1023px) {
  .years-component {
    width: 120px;
    font-size: 12px;
  }
}
</style>