<template>
  <div class="p-2">
    <div v-for="file in selectedFiles" :key="file.id">
      {{ file.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedFiles: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style></style>
