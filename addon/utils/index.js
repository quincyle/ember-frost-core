/**
 * Utility methods/modules
 */

import $ from 'jquery'

export {default as events} from './events'
export {default as keyCodes} from './key-codes'
export {default as windowUtils} from './window'

export function cloneEvent (event, target) {
  let newEvent = $.Event(null, event)
  let newTarget = $.clone(target)

  newEvent.target = newTarget

  return newEvent
}
