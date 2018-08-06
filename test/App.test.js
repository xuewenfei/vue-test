import Vue from 'vue'
import { shallow  } from 'vue-test-utils'
import App from '../src/App'

describe('App.test.js', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = shallow(App, { // Create a shallow instance of the component
      data: {
        messages: ['Cat']
      }
    })
  })

  it('equals messages to ["Cat"]', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
  })
  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
