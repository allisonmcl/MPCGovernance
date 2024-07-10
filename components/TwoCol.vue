<template>
  <div class="flex">
    <div class="item">
      <slot name="leftCol" />
    </div>
    <div class="item">
      <slot name="rightCol" />
    </div>
  </div>
</template>

<style>
.item {
  max-width: 70%;
}
</style>
