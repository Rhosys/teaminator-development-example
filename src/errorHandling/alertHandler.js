export default class AlertHandler {
  /**
   * @constructor
   * @param {Object} store - Vuex Store
   */
  constructor(store) {
    this.store = store;
  }

  /**
   * @description Create an alert
   * @param {string} message - translated message to show
   * @param {string} [details] - translated extra message to show
   * @param {string} [type] - bootstrap alert type
   * @param {int} [timeoutInMs] - time on screen, 0 or -1 is forever
   * @returns void
   */
  createAlert(message, details, type = 'info', timeoutInMs = 0) {
    let alert = {
      message: message,
      details: details,
      alertType: type,
      timeoutInMs: timeoutInMs
    };
    this.store.commit('setAlert', alert);
  }

  /**
   * @description Reset Alert
   * @param {string} [alertType] - the alert with given alertType to remove (null, to remove alerts with any alertType)
   * @returns void
   */
  removeAlert(alertType) {
    this.store.commit('removeAlert', alertType);
  }

  /**
   * @description Resets a specific alert
   * @param {Object} [alert] - the alert to remove (will not remove alerts other than the one provided)
   * @returns void
   */
  removeSpecificAlert(alert) {
    this.store.commit('removeSpecificAlert', alert);
  }
}
