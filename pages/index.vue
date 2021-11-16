<template>
  <div id="container" class="w-screen h-screen border-2">
    <div class="w-full h-full md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/2">
      <ButtonContainer
        :view-folder-structure="viewFolderStructure"
        :folder-structure-viewed="folderStructureViewed"
        :selected-folder="selectedFolder"
        :select-a-folder="selectAFolder"
        :selected-files="selectedFiles"
        :select-a-file="selectAFile"
        :go-back-one-level="goBackOneLevel"
        :accept-file-selection="acceptFileSelection"
      />
      <FileList :accepted-files="acceptedFiles" />
    </div>
  </div>
</template>

<script>
import ButtonContainer from '~/components/ButtonContainer'
import FileList from '~/components/FileList'
export default {
  components: {
    ButtonContainer,
    FileList,
  },
  data() {
    return {
      folderStructureViewed: false,
      folderStructure: {},
      selectedFolder: {},
      selectedFiles: [],
      folderHistory: [],
      acceptedFiles: [],
    }
  },
  beforeMount() {
    this.getFolderStructure()
  },
  // create all methods here to enable this page become the only component that holds logic
  methods: {
    // sets selectFile to state
    viewFolderStructure(state) {
      if (state) {
        this.folderStructureViewed = true
      } else {
        this.folderStructureViewed = false
        // data cleanup
        this.selectedFolder = this.folderStructure
        this.selectedFiles = []
        this.folderHistory = []
      }
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
    async getFolderStructure() {
      const response = await this.GET_folderStructure()
      if (response) {
        this.folderStructure = response
        this.selectAFolder(response)
      }
    },
    // event to select a folder on click and then save that folder to history
    selectAFolder(folder) {
      this.selectedFolder = folder
      this.folderHistory.push(folder)
    },

    // add folder to array of selected folders
    setFolderHistory(folder) {
      this.folderHistory = folder
    },
    // event to select a file but if file is already selected remove from list
    selectAFile(file) {
      const fileExists = this.selectedFiles.find(
        (selectedFile) => selectedFile.id === file.id
      )
      if (fileExists) {
        this.selectedFiles = this.selectedFiles.filter(
          (selectedFile) => selectedFile.id !== file.id
        )
      } else {
        this.selectedFiles = [...this.selectedFiles, file]
      }
    },
    // to go back one level
    // history for the folders need to be tracked
    goBackOneLevel() {
      this.folderHistory.pop()
      this.selectedFolder = this.folderHistory[this.folderHistory.length - 1]
    },
    acceptFileSelection(selectedFiles) {
      this.acceptedFiles = [...selectedFiles]
    },
  },
}
</script>
