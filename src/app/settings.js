/**
 * @name getHostname
 * @return {String} hostname can start with www. or without it
 */
const getHostname = function() {
  const hostname = window.location.hostname
  if (!hostname) throw new Error('settings: no hostname detected')
  return hostname
}

/**
 * @returns {String} http protocol
 */
const getProtocol = function() {
  const protocol = window.location.protocol
  if (!protocol) throw new Error('settings: no protocol detected')
  return protocol
}

/**
 * @param {String} hostname window.location.hostname
 * @returns {Boolean} True if hostname includes 'localhost'
 */
const isLocalhost = function(hostname) {
  const patt = new RegExp(/^localhost/)
  return patt.test(hostname)
}

/**
 * @returns {String} api url
 */
const getApiUrl = function() {
  // local env
  const hostname = getHostname()
  if (isLocalhost(hostname)) {
    return `${getProtocol()}//localhost:3000/api/`
  }
}

const API_URL = getApiUrl()

export { API_URL }
