<template>
  <div id="button-container" class="relative flex flex-col items-center">
    <button
      class="
        rounded
        py-1
        px-4
        bg-selected-blue
        text-white
        disabled:text-gray-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:bg-gray-100
      "
      :disabled="!folderStructureLoaded"
      @click.prevent="viewFolderStructure(true)"
    >
      Select Files
    </button>
    <div id="floating-container-wrapper">
      <FloatingContainer
        :selected-folder="selectedFolder"
        :select-a-folder="selectAFolder"
        :selected-files="selectedFiles"
        :select-a-file="selectAFile"
        :go-back-one-level="goBackOneLevel"
        :view-folder-structure="viewFolderStructure"
        :accept-file-selection="acceptFileSelection"
        :folder-structure-viewed="folderStructureViewed"
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
    acceptFileSelection: {
      type: Function,
      required: true,
      default: () => {},
    },
    folderStructureLoaded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
