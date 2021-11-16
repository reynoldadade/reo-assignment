<template>
  <div class="w-full p-2">
    <button
      class="w-full p-1 text-left hover:bg-gray-200 flex justify-between"
      @click="selectAFolder(folder)"
    >
      <div>
        <span class="p-1 bg-gray-100 rounded m-1"
          ><i class="far fa-folder"></i></span
        ><span>{{ folder.name }}</span>
      </div>

      <span><i class="fas fa-chevron-right"></i></span>
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
