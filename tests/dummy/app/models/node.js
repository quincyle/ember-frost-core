import attr from 'ember-data/attr'
import Model from 'ember-data/model'

export default Model.extend({
  label: attr('string'),
  secondaryLabels: attr(),
  value: attr('string')
})
