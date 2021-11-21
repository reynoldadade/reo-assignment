<template>
  <div
    v-if="folderStructureViewed"
    id="floating-container"
    class="
      p-2
      rounded-lg
      bg-white
      shadow
      w-full
      flex flex-col
      absolute
      top-0
      left-0
      z-10
    "
  >
    <div class="p-2 font-semibold flex justify-between">
      <div class="w-full">
        <button
          v-if="folderName"
          class="
            p-1
            hover:bg-hover-gray
            focus:bg-pressed-gray
            rounded-full
            actionButton
          "
          @click="goBackOneLevel"
        >
          <span><i class="fas fa-arrow-left"></i></span>
        </button>
        <span id="currentFile" class="p-2">
          {{ folderName ? folderName : 'Torstraße 145, 39481 Nürnberg' }}
        </span>
      </div>
      <div>
        <button
          class="
            hover:bg-hover-gray
            focus:bg-pressed-gray
            rounded-full
            actionButton
          "
          @click.prevent="viewFolderStructure(false)"
        >
          <span><i class="fas fa-times"></i></span>
        </button>
      </div>
    </div>
    <!-- loop through all available folders -->
    <div class="overflow-y-auto flex-grow">
      <div v-for="folder in folders" :key="folder.id">
        <Folders :folder="folder" :select-a-folder="selectAFolder" />
      </div>
      <!-- loop to find all files -->
      <div v-for="file in files" :key="file.id">
        <Files
          :file="file"
          :selected-files="selectedFiles"
          :select-a-file="selectAFile"
        />
      </div>
    </div>
    <div class="flex justify-end p-2">
      <button
        :disabled="selectedFiles.length === 0"
        class="
          py-1
          px-4
          rounded
          disabled:border disabled:border-gray-100
          bg-selected-blue
          text-white
          disabled:text-gray-400
          disabled:cursor-not-allowed
          disabled:opacity-50
          disabled:bg-disabled-gray
        "
        @click="acceptFileSelection(selectedFiles)"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import Files from '@/components/Files.vue'
import Folders from '@/components/Folders.vue'
export default {
  components: {
    Files,
    Folders,
  },
  props: {
    selectedFolder: {
      type: Object,
      required: false,
      default: () => {},
    },
    selectAFolder: {
      type: Function,
      required: true,
      default: () => {},
    },
    selectedFiles: {
      type: Array,
      required: false,
      default: () => [],
    },
    selectAFile: {
      type: Function,
      required: true,
      default: () => {},
    },
    goBackOneLevel: {
      type: Function,
      required: true,
      default: () => {},
    },
    viewFolderStructure: {
      type: Function,
      required: true,
      default: () => {},
    },
    acceptFileSelection: {
      type: Function,
      required: true,
      default: () => {},
    },
    folderStructureViewed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    folders() {
      return this.selectedFolder?.folders
    },
    files() {
      if (this.selectedFolder?.files) {
        return this.selectedFolder.files.filter(
          (file) =>
            file.mimeType === 'application/pdf' ||
            file.mimeType === 'image/jpeg' ||
            file.mimeType === 'image/png'
        )
      } else {
        return []
      }
    },
    folderName() {
      return this.selectedFolder?.name ? this.selectedFolder.name : ''
    },
    // if selectedFiles is empty return 'Select Files, if selectedFiles is 1 return Select File
    buttonText() {
      if (this.selectedFiles.length === 0) {
        return 'Select Files'
      } else if (this.selectedFiles.length === 1) {
        return 'Select 1 File'
      } else {
        return `Select ${this.selectedFiles.length} Files`
      }
    },
  },
}
</script>

<style></style>
