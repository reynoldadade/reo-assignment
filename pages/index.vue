<template>
  <div id="container" class="w-screen h-screen border-2">
    <div
      class="
        w-full
        h-full
        md:w-1/2 md:h-1/2
        lg:w-1/3 lg:h-1/2
        border-red-500 border-2
      "
    >
      <ButtonContainer :select-a-file="selectAFile" :select-file="selectFile" />
    </div>
  </div>
</template>

<script>
import ButtonContainer from '~/components/ButtonContainer'
export default {
  components: {
    ButtonContainer,
  },
  data() {
    return {
      selectFile: false,
      folderStructure: {},
    }
  },
  beforeMount() {
    this.getFolderStrcuture()
  },
  // create all methods here to enable this page become the only component that holds logic
  methods: {
    // sets selectFile to state
    selectAFile(state) {
      this.selectFile = state
    },
    async GET_folderStructure() {
      // GET folder structure
      try {
        const response = await this.$axios.get(
          'https://api-dev.reo.so/api/folderStructure'
        )
        return response.data
      } catch ({ response }) {
        return response.data
      }
    },

    // use data recieved from api
    async getFolderStrcuture() {
      const response = await this.GET_folderStructure()
      if (response) {
        this.folderStructure = response
      }
    },
  },
}
</script>
