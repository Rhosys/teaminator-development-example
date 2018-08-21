/* eslint-disable no-console */
import 'url-polyfill';

export default class Logger {
  critical(message, display = true) {
    if (display) {
      console.error(message);
    }
  }

  error(message, display = true) {
    if (display) {
      console.error(message);
    }
  }

  warn(message, display = true) {
    if (display) {
      console.warn(message);
    }
  }

  info(message, display = true) {
    if (display) {
      console.info(message);
    }
  }

  log(message, display = true) {
    this.info(message, display);
  }
}
