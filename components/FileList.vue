<template>
  <div class="p-2 w-full">
    <div class="p-2">Files Selected</div>
    <div
      v-for="file in acceptedFiles"
      :key="file.id"
      class="text-gray-500 font-semibold border rounded bg-gray-100 p-2 m-1"
    >
      {{ file.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    acceptedFiles: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style></style>
