<template>
  <div class="w-full p-2">
    <button
      class="w-full p-1 text-left hover:bg-gray-200"
      @click="selectAFolder(folder)"
    >
      <span class="p-1"><i class="far fa-folder"></i></span
      ><span>{{ folder.name }}</span>
    </button>
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
    selectAFolder: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style></style>
