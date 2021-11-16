<template>
  <div class="p-2 rounded-lg border-red bg-red-500 w-full h-full">
    <!-- loop through all available folders -->
    <div v-for="folder in folders" :key="folder.id">
      <Folders :folder="folder" />
    </div>
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
    folders: {
      type: Array,
      required: false,
      default: () => [],
    },
    files: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style></style>
