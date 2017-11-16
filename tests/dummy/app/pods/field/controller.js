import Controller from '@ember/controller'
import {inject as service} from '@ember/service'

export default Controller.extend({
  notifications: service('notification-messages'),
  error: true,

  actions: {
    // BEGIN-SNIPPET text-support-events
    support (type, value) {
      this.get('notifications').success(`${type}: ${value}`, {
        autoClear: true,
        clearDuration: 2000
      })
    },
    // END-SNIPPET text-support-events

    // BEGIN-SNIPPET text-dom-events
    event (event) {
      this.get('notifications').success(`${event.type}: ${event.target.value}`, {
        autoClear: true,
        clearDuration: 2000
      })
    }
    // END-SNIPPET text-dom-events
  }
})
