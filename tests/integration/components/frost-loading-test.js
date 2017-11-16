import {expect} from 'chai'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'

const test = integration('frost-loading')
describe(test.label, function () {
  test.setup()

  it('should render default values', function () {
    this.render(hbs`
      {{frost-loading hook='myLoader'}}
    `)

    expect(
      this.$('.uil-ripple'),
      'Has class "uil-ripple"'
    ).to.have.length(1)
  })

  it('should have type property set class', function () {
    this.render(hbs`
      {{frost-loading
        hook='myLoader'
        type='ring'
      }}
    `)

    expect(
      this.$('.uil-ring'),
      'Has class "uil-ring"'
    ).to.have.length(1)
  })

  it('should render using spread', function () {
    this.render(hbs`
      {{frost-loading
        options=(hash
          hook='myLoader'
          type='ring'
        )
      }}
    `)

    expect(
      this.$('.uil-ring'),
      'Has class "uil-ring"'
    ).to.have.length(1)
  })
})
