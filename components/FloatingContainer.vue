<template>
  <div
    class="
      p-2
      rounded-lg
      w-full
      h-full
      bg-white
      shadow
      w-full
      max-h-80
      flex flex-col
    "
  >
    <div class="p-2 font-semibold flex justify-between">
      <div>
        <button
          v-if="folderName"
          class="p-1 hover:bg-gray-200 rounded-full"
          @click="goBackOneLevel"
        >
          <span><i class="fas fa-arrow-left"></i></span>
        </button>
        {{ folderName ? folderName : 'REO Assignment Files' }}
      </div>
      <div>
        <button
          class="hover:bg-gray-200 p-1 rounded-full"
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
          bg-blue-500
          text-white
          disabled:text-gray-400
          disabled:cursor-not-allowed
          disabled:opacity-50
          disabled:bg-gray-100
        "
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
  },
  computed: {
    folders() {
      return this.selectedFolder.folders
    },
    files() {
      return this.selectedFolder.files
    },
    folderName() {
      return this.selectedFolder.name ? this.selectedFolder.name : ''
    },
    // if selectedFiles is empty return 'Select Files, if selectedFiles is 1 return Select File
    buttonText() {
      if (this.selectedFiles.length === 0) {
        return 'Select Files'
      } else if (this.selectedFiles.length === 1) {
        return 'Select File'
      } else {
        return `Select ${this.selectedFiles.length} Files`
      }
    },
  },
}
</script>

<style></style>
