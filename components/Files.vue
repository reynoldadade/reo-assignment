<template>
  <div class="w-full">
    <button
      id="files"
      class="
        w-full
        justify-between
        flex
        hover:bg-hover-gray
        relative
        focus:bg-pressed-gray
      "
      @click="selectAFile(file)"
    >
      <div class="w-full flex justify-start">
        <IconThumbail :url="file.url" :mime-type="file.mimeType" />
        <span>{{ file.name }}</span>
      </div>

      <span v-if="isFileSelected" class="icon">
        <i class="fas fa-check-circle text-selected-blue"></i>
      </span>
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
