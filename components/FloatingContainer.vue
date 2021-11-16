<template>
  <div class="p-2 rounded-lg w-full h-full bg-white shadow">
    <div class="p-2 font-semibold">
      <button v-if="folderName" class="p-1" @click="goBackOneLevel">
        <span><i class="fas fa-arrow-left"></i></span>
      </button>
      {{ folderName }}
    </div>
    <!-- loop through all available folders -->
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
  },
}
</script>

<style></style>
