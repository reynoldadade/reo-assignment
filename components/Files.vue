<template>
  <div class="w-full p-2">
    <span class="p-1"><i class="far fa-file"></i></span
    ><span>{{ file.name }}</span>
  </div>
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
