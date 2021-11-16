<template>
  <div class="w-full">{{ file.name }}</div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
}
</script>

<style></style>
