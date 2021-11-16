<template>
  <div class="w-full">
    {{ folder.name }}
  </div>
</template>

<script>
export default {
  props: {
    folder: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
}
</script>

<style></style>
