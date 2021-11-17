<template>
  <div class="w-full p-2">
    <button
      class="w-full p-1 justify-between flex hover:bg-gray-200"
      @click="selectAFile(file)"
    >
      <div class="w-full flex justify-start">
        <IconThumbail :url="file.url" :mime-type="file.mimeType" />
        <div class="p-1">{{ file.name }}</div>
      </div>
      <div>
        <span v-if="isFileSelected">
          <i class="fas fa-check-circle text-blue-500"></i>
        </span>
      </div>
    </button>
  </div>
</template>

<script>
import IconThumbail from '~/components/IconThumbnail.vue'
export default {
  components: {
    IconThumbail,
  },
  props: {
    file: {
      type: Object,
      required: false,
      default: () => {},
    },
    selectAFile: {
      type: Function,
      required: true,
      default: () => {},
    },
    selectedFiles: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    isFileSelected() {
      // check if file exists in array of selectedFiles
      const fileExists = this.selectedFiles.find(
        (selectedFile) => selectedFile.id === this.file.id
      )
      if (fileExists) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style></style>
