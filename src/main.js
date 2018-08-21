/* eslint-disable */
if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

try {
  require('./index.js');
  let loader = document.getElementById('loading-nav');
  if (loader) { loader.outerHTML = ''; }
  let loaderError = document.getElementById('loading-error');
  if (loaderError) { loaderError.outerHTML = ''; }
} catch (error) {
  console.error('App did not load', error);
  let loader = document.getElementById('initial-loader');
  if (loader) { loader.outerHTML = ''; }
  let loaderError = document.getElementById('loading-error');
  if (loaderError) { loaderError.style.display = ''; }
}
