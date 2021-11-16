<template>
  <div class="p-2 rounded-lg w-full h-full bg-white shadow">
    <!-- loop through all available folders -->
    <div v-for="folder in folders" :key="folder.id">
      <Folders :folder="folder" />
    </div>
    <!-- loop to find all files -->
    <div v-for="file in files" :key="file.id">
      <Files :file="file" />
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
  },
  computed: {
    folders() {
      return this.selectedFolder.folders
    },
    files() {
      return this.selectedFolder.files
    },
  },
}
</script>

<style></style>
