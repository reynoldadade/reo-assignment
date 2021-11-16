<template>
  <div id="button-container" class="relative w-full h-full">
    <button
      class="rounded py-1 px-4 bg-blue-500 text-white flex-auto"
      @click.prevent="viewFolderStructure(true)"
    >
      Select Files
    </button>
    <div v-if="folderStructureViewed" id="floating-container-wrapper">
      <FloatingContainer
        :selected-folder="selectedFolder"
        :select-a-folder="selectAFolder"
        :selected-files="selectedFiles"
        :select-a-file="selectAFile"
        :go-back-one-level="goBackOneLevel"
        :view-folder-structure="viewFolderStructure"
      />
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
    folderStructureViewed: {
      type: Boolean,
      default: false,
    },
    viewFolderStructure: {
      type: Function,
      default: () => {},
    },
    selectAFolder: {
      type: Function,
      default: () => {},
    },
    selectAFile: {
      type: Function,
      default: () => {},
    },
    selectedFolder: {
      type: Object,
      default: () => {},
    },
    selectedFiles: {
      type: Array,
      required: false,
      default: () => [],
    },
    goBackOneLevel: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style></style>
