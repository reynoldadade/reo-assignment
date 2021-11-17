import { shallowMount } from '@vue/test-utils'
import FloatingContainer from '@/components/FloatingContainer'

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
describe('Floating Container', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(FloatingContainer, {
      propsData: {
        selectedFiles: [
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
        selectedFolder: mockResponse,
        selectAFolder: jest.fn(),
        selectAFile: jest.fn(),
        goBackOneLevel: jest.fn(),
        viewFolderStrcuture: jest.fn(),
        acceptFileSelection: jest.fn(),
      },
    })
  })
  it('button test should be equal to select 1 file', async () => {
    // when the  length for selectedFiles is 1
    expect(wrapper.vm.buttonText).toBe('Select 1 File')

    // when the length for selectedFiles is more than 1
    await wrapper.setProps({
      selectedFiles: [
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
    })
    expect(wrapper.vm.buttonText).toBe('Select 2 Files')

    // when the length for selectedFiles is 0
    await wrapper.setProps({
      selectedFiles: [],
    })
    expect(wrapper.vm.buttonText).toBe('Select Files')
  })

  // folder should return selectedFolder.folders
  it('folder should return selectedFolder.folders', () => {
    expect(wrapper.vm.folders).toStrictEqual([
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
    ])
  })
  // files should return selectedFolder.files
  it('files should return selectedFolder.files', () => {
    expect(wrapper.vm.files).toStrictEqual([
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
    ])
  })

  // folderName should be name of folder.name
  it('folderName should be name of folder.name', () => {
    expect(wrapper.vm.folderName).toBe('')
  })

  // selected folder should return  empty when files does not exist
  it('selected folder should return  empty when files does not exist', async () => {
    await wrapper.setProps({
      selectedFolder: {},
    })
    expect(wrapper.vm.files).toStrictEqual([])
  })
})
