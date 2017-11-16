import {expect} from 'chai'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'

const test = integration('frost-icon')
describe(test.label, function () {
  test.setup()

  it('should set icon class', function () {
    this.render(hbs`
      {{frost-icon hook='myIcon' icon='round-add'}}
    `)

    expect(
      this.$('.frost-icon-frost-round-add'),
      'Icon class is set correctly.'
    ).to.have.length(1)
  })

  it('should set the pack property', function () {
    this.render(hbs`
      {{frost-icon
        hook='myIcon'
        pack='test'
        icon='round-add'
      }}
    `)

    expect(
      this.$('.frost-icon-test-round-add'),
      'Icon class updates correctly when pack is set.'
    ).to.have.length(1)
  })

  it('should render using spread', function () {
    this.render(hbs`
      {{frost-icon hook='myIcon' options=(hash icon='round-add')}}
    `)

    expect(
      this.$('.frost-icon-frost-round-add'),
      'Icon class is set correctly.'
    ).to.have.length(1)
  })
})
