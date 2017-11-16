/**
 * Component definition for the frost-component component
 */

import Component from '@ember/component'

import CssMixin from '../mixins/css'
import {HookMixin} from 'ember-hook'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'
import SpreadMixin from 'ember-spread'

export default Component.extend(PropTypesMixin, HookMixin, SpreadMixin, CssMixin, {
  // == Dependencies ==========================================================

  // == Keyword Properties ====================================================

  // == PropTypes =============================================================

  propTypes: {
    // options
    hook: PropTypes.string.isRequired,
    hookPrefix: PropTypes.string,
    hookQualifiers: PropTypes.object,

    // state

    // keywords (from http://emberjs.com/api/classes/Ember.Component.html)
    actions: PropTypes.object,
    ariaRole: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.null
    ]),
    attributeBindings: PropTypes.arrayOf(PropTypes.string),
    // FIXME: the following property defined in propTypes cause validation errors
    // when ember-prop-types validateOnUpdate setting is set to true
    // classNameBindings: PropTypes.arrayOf(PropTypes.string),
    // classNames: PropTypes.arrayOf(PropTypes.string),
    concatenatedProperties: PropTypes.arrayOf(PropTypes.string),
    // FIXME: the following properties defined in propTypes cause validation errors
    // when ember-prop-types validateOnUpdate setting is set to true
    // element: PropTypes.oneOfType([
    //   PropTypes.element,
    //   PropTypes.null
    // ]),
    // elementId: PropTypes.oneOfType([
    //   PropTypes.string,
    //   PropTypes.null
    // ]),
    // isDestroyed: PropTypes.bool,
    // isDestroying: PropTypes.bool,
    isVisible: PropTypes.bool,
    mergedProperties: PropTypes.arrayOf(PropTypes.string),
    layout: PropTypes.any,
    positionalParams: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ]),
    tagName: PropTypes.any
  },

  getDefaultProps () {
    return {
      hookPrefix: this.get('hook') || this.get('options.hook')
    }
  },

  // == Computed Properties ===================================================

  // == Functions =============================================================

  // == DOM Events ============================================================

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {
  }
})
