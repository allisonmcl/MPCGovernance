<script setup>
defineProps({
  navigation: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul>
    <li v-for="(item, index) in navigation" :key="index">
      <NuxtLink v-if="!item.children" :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <span v-else>
        <button aria-expanded="false">
          {{ item.title }}
        </button>
      </span>
      <Menu v-if="item.children" :navigation="item.children" />
    </li>
  </ul>
</template>
