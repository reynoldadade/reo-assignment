<template>
  <div class="">
    <div v-if="mimeType === 'application/pdf'">
      <span class="p-1 rounded bg-gray-100 m-1"
        ><i class="far fa-file-pdf"></i
      ></span>
    </div>
    <div v-else class="overflow-hidden iconImg">
      <img :src="url" alt="file image" class="w-full h-full rounded" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mimeType: {
      type: String,
      required: false,
      default: () => '',
    },
    url: {
      type: String,
      required: false,
      default: () => '',
    },
  },
  computed: {
    fileIcon() {
      switch (this.mimeType) {
        case 'application/pdf':
          return 'far fa-file-pdf'
        default:
          return 'far fa-file'
      }
    },
  },
}
</script>

<style></style>
