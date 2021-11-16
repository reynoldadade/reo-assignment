<template>
  <div class="w-full p-2">
    <span class="p-1"><i class="far fa-folder"></i></span
    ><span>{{ folder.name }}</span>
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
