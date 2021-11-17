import { shallowMount } from '@vue/test-utils'
import FilesComponent from '~/components/Files'

describe('FilesComponent', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(FilesComponent, {
      propsData: {
        file: {
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
        selectAFile: jest.fn(),
      },
    })
  })

  test('isFileSelected shold be true or false dpending on selectedFiles', async () => {
    expect(wrapper.vm.isFileSelected).toBeFalsy()
    await wrapper.setProps({
      selectedFiles: [
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
    })
    expect(wrapper.vm.isFileSelected).toBeTruthy()
  })
})
