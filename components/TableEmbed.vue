<script setup>
import { micromark } from "micromark";
defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <ContentQuery
    find="one"
    :where="{ _type: 'csv', title: title }"
    v-slot="{ data }"
  >
    <table v-if="data">
      <thead>
        <tr>
          <th v-for="(value, key) in data.body[0]">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="name in data.body">
          <td v-for="(value, key) in name" v-html="micromark(value)"></td>
        </tr>
      </tbody>
    </table>
  </ContentQuery>
</template>
