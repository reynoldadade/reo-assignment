import { shallowMount } from '@vue/test-utils'
import IndexPage from '@/pages/index.vue'

const mockResponse = {
  folders: [
    {
      id: '2ccbbc8e-bfc4-4720-ba38-a3241a95a8fe',
      name: 'Cave of Wonders',
      parentFolderId: null,
      folders: [],
      files: [
        {
          id: '5d7c79dc-6605-4530-82a2-8ba20a3b6ad1',
          name: 'sample-large-zip-file.zip',
          url: 'https://reo-api-dev.s3.eu-central-1.amazonaws.com/property-documents/dfaf8f26-d74c-47ab-84ed-38feaae42725/8bb7af26-11ae-4d1b-a41e-b4e606efef94.zip',
          mimeType: 'application/zip',
          usage: 'internal',
          floorPlan: null,
          parentFolderId: '2ccbbc8e-bfc4-4720-ba38-a3241a95a8fe',
          createdAt: 1618576836000,
          updatedAt: 1618912062000,
        },
      ],
      createdAt: 1618576782000,
      updatedAt: 1618577219000,
    },
  ],
  files: [
    {
      id: '3c4a9633-d421-43f3-8757-78962476c19d',
      name: 'Bouct',
      url: 'https://reo-api-dev.s3.eu-central-1.amazonaws.com/property-documents/dfaf8f26-d74c-47ab-84ed-38feaae42725/7c572236-96e7-4098-83ca-c60c987484b0.png',
      mimeType: 'image/png',
      usage: 'internal',
      floorPlan: null,
      parentFolderId: null,
      createdAt: 1618479361000,
      updatedAt: 1618917917000,
    },
  ],
}
const folderMock = {
  id: '2ccbbc8e-bfc4-4720-ba38-a3241a95a8fe',
  name: 'Cave of Wonders',
  parentFolderId: null,
  folders: [],
  files: [
    {
      id: '5d7c79dc-6605-4530-82a2-8ba20a3b6ad1',
      name: 'sample-large-zip-file.zip',
      url: 'https://reo-api-dev.s3.eu-central-1.amazonaws.com/property-documents/dfaf8f26-d74c-47ab-84ed-38feaae42725/8bb7af26-11ae-4d1b-a41e-b4e606efef94.zip',
      mimeType: 'application/zip',
      usage: 'internal',
      floorPlan: null,
      parentFolderId: '2ccbbc8e-bfc4-4720-ba38-a3241a95a8fe',
      createdAt: 1618576836000,
      updatedAt: 1618912062000,
    },
  ],
  createdAt: 1618576782000,
  updatedAt: 1618577219000,
}

describe('Index Page', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(IndexPage, {
      mocks: {
        $axios: {
          get: jest
            .fn()
            .mockResolvedValue({
              data: mockResponse,
            })
            .mockRejectedValueOnce({
              response: {
                data: {
                  message: 'API Failed',
                },
              },
            }),
        },
      },
    })
  })

  it('should render the correct markup', () => {
    expect(wrapper.find('#index-page').exists()).toBe(true)
  })

  // GET_folderStructure should return mocked Value
  it('GET_folderStructure should return data', async () => {
    const response = await wrapper.vm.GET_folderStructure()
    expect(response).toStrictEqual(mockResponse)
  })
  it('GET_folderStructure should set value to folderStructure ', async () => {
    await wrapper.vm.getFolderStructure()
    expect(wrapper.vm.folderStructure).toBe(mockResponse)
    expect(wrapper.vm.selectedFolder).toStrictEqual(wrapper.vm.folderStructure)
    expect(wrapper.vm.folderHistory.length).toBe(1)
  })

  it('should set the same of the overlay', () => {
    wrapper.vm.viewFolderStructure(true)
    expect(wrapper.vm.folderStructureViewed).toBeTruthy()
    wrapper.vm.viewFolderStructure(false)
    expect(wrapper.vm.folderStructureViewed).toBeFalsy()
    expect(wrapper.vm.selectedFolder).toStrictEqual(wrapper.vm.folderStructure)
  })

  it('selectAFile should at a file to an array of files', () => {
    const resultMock = {
      id: '3c4a9633-d421-43f3-8757-78962476c19d',
      name: 'Bouct',
      url: 'https://reo-api-dev.s3.eu-central-1.amazonaws.com/property-documents/dfaf8f26-d74c-47ab-84ed-38feaae42725/7c572236-96e7-4098-83ca-c60c987484b0.png',
      mimeType: 'image/png',
      usage: 'internal',
      floorPlan: null,
      parentFolderId: null,
      createdAt: 1618479361000,
      updatedAt: 1618917917000,
    }
    // on initial call it should saved the file details
    wrapper.vm.selectAFile(resultMock)
    expect(wrapper.vm.selectedFiles).toStrictEqual([resultMock])
    // if file details already exists then remove it
    wrapper.vm.selectAFile(resultMock)
    expect(wrapper.vm.selectedFiles).toStrictEqual([])
  })

  // test goBackOne method to see if it actually reduces array length
  test('reduction of array when goBackOne is called', () => {
    wrapper.vm.selectAFolder(folderMock)
    wrapper.vm.selectAFolder(folderMock)
    wrapper.vm.goBackOneLevel()
    expect(wrapper.vm.folderHistory.length).toBe(1)
  })

  // acceptSelectedFiles should be the files which were clicked on
  test('expect aceeptedFiles to equal selectedFiles', () => {
    const resultMock = {
      id: '3c4a9633-d421-43f3-8757-78962476c19d',
      name: 'Bouct',
      url: 'https://reo-api-dev.s3.eu-central-1.amazonaws.com/property-documents/dfaf8f26-d74c-47ab-84ed-38feaae42725/7c572236-96e7-4098-83ca-c60c987484b0.png',
      mimeType: 'image/png',
      usage: 'internal',
      floorPlan: null,
      parentFolderId: null,
      createdAt: 1618479361000,
      updatedAt: 1618917917000,
    }

    wrapper.vm.acceptFileSelection([resultMock])
    expect(wrapper.vm.acceptedFiles).toStrictEqual([resultMock])
    expect(wrapper.vm.folderStructureViewed).toBeFalsy()
  })
})
