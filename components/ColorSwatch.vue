<script setup>
defineProps({
  hex: {
    type: String,
  },
  title: {
    type: String,
  },
});

</script>

<template>
  <div class="color-swatch">
    <div class="color-swatch__top" :style="'background-color:' + hex"></div>
    <div class="color-swatch__bottom">{{ title }}</div>
  </div>
</template>

<style>
.color-swatch {
  width: 100px;
  border: 1px solid #ccc;
}
.color-swatch__top {
  width: 100px;
  height: 70px;
}

.color-swatch__bottom {
  padding: 5px;
}
</style>