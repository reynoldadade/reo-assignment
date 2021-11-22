<template>
  <div class="w-full">
    <button
      id="folders"
      class="
        w-full
        text-left
        hover:bg-hover-gray
        flex
        justify-between
        focus:bg-pressed-gray
        relative
      "
      @click="selectAFolder(folder)"
    >
      <div class="flex">
        <span class="p-1 bg-gray-100 rounded iconImg"
          ><a-icon type="folder" /></span
        ><span class="pt-1">{{ folder.name }}</span>
      </div>

      <span class="icon">
        <!-- <i class="fas fa-chevron-right"></i> -->
        <a-icon type="right" />
      </span>
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
