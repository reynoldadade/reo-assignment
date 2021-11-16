<template>
  <div id="button-container" class="relative w-full h-full">
    <button
      class="rounded py-1 px-4 bg-blue-500 text-white flex-auto"
      @click.prevent="selectAFile(true)"
    >
      Select Files
    </button>
    <div
      v-if="selectFile"
      id="floating-container-wrapper"
      class="absolute top-0 left-0 z-10 w-full h-1/2"
    >
      <FloatingContainer />
    </div>
  </div>
</template>

<script>
import FloatingContainer from '@/components/FloatingContainer.vue'
export default {
  components: {
    FloatingContainer,
  },
  props: {
    selectFile: {
      type: Boolean,
      default: false,
    },
    selectAFile: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style></style>
