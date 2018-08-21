export default {
  setAlert(state, alert) {
    state.alert = alert;
  },
  removeAlert(state, type) {
    if (type) {
      if (state.alert && state.alert.alertType === type) {
        state.alert = null;
      }
    } else {
      state.alert = null;
    }
  },
  removeSpecificAlert(state, alert) {
    if (state.alert === alert) {
      state.alert = null;
    }
  },

  setRunningActivity(state, activity) {
    state.runningActivities[activity.id] = activity;
  },
  removeRunningActivity(state, activityId) {
    delete state.runningActivities[activityId];
  }
};
