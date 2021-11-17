import { shallowMount } from '@vue/test-utils'
import IconThumbnail from '@/components/IconThumbnail.vue'

describe('IconThumbnail.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(IconThumbnail, {
      propsData: {
        mimeType: 'image/png',
        url: 'https://reo-api-dev.s3.eu-central-1.amazonaws.com/property-documents/dfaf8f26-d74c-47ab-84ed-38feaae42725/8bb7af26-11ae-4d1b-a41e-b4e606efef94.zip',
      },
    })
  })

  //  fileIcon should return "far fa-file"
  it('fileIcon should return "far fa-file"', () => {
    expect(wrapper.vm.fileIcon).toBe('far fa-file')
  })

  // fileIcon should return "far fa-file-pdf
  it('fileIcon should return "far fa-file-pdf"', async () => {
    await wrapper.setProps({ mimeType: 'application/pdf' })
    expect(wrapper.vm.fileIcon).toBe('far fa-file-pdf')
  })
})
