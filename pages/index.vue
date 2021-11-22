<template>
  <div
    id="index-page"
    class="
      w-screen
      h-screen
      border-2
      flex
      sm:justify-start
      md:justify-center md:items-center
    "
  >
    <div class="w-full md:w-2/3 lg:w-1/3">
      <ButtonContainer
        :view-folder-structure="viewFolderStructure"
        :folder-structure-viewed="folderStructureViewed"
        :selected-folder="selectedFolder"
        :select-a-folder="selectAFolder"
        :selected-files="selectedFiles"
        :select-a-file="selectAFile"
        :go-back-one-level="goBackOneLevel"
        :accept-file-selection="acceptFileSelection"
        :folder-structure-loaded="folderStructureLoaded"
      />
      <FileList
        v-if="acceptedFiles.length > 0"
        :accepted-files="acceptedFiles"
      />
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

  computed: {
    folderStructureLoaded() {
      return Object.keys(this.folderStructure).length > 0
    },
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
        return false
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
    // once user has selected files they can be accepted
    acceptFileSelection(selectedFiles) {
      this.acceptedFiles = [...selectedFiles]
      this.folderStructureViewed = false
    },
  },
}
</script>

<style>
/* @import url('http://fonts.cdnfonts.com/css/calibre'); */

#floating-container {
  height: 23.75rem;
  width: 26.25rem;
}

#folders {
  border-radius: 8px;
  padding: 8px 0px 8px 8px;
  height: 44px;
}

#files {
  border-radius: 8px;
  padding: 8px 0px 8px 8px;
  height: 44px;
}

.icon {
  position: absolute;
  right: 13.25px;
  top: 13.25px;
  bottom: 13.25px;
}

.iconImg {
  height: 28px;
  width: 28px;
  margin-right: 8px;
}

.selectButton {
  border-radius: 4px;
}

.actionButton {
  border-radius: 4px;
  height: 44px;
  width: 44px;
}

.selectedFilesButton {
  width: 98px;
  height: 32px;
  border-radius: 4px;
}

/* */

@font-face {
  font-family: 'Calibre';
  src: url('/static/Calibre-Regular.otf');
}

body {
  font-family: 'Calibre', sans-serif;
}
</style>
