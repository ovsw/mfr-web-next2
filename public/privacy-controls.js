// Runs before the unified Iubenda loader and before Next.js hydration.
(function () {
  var ready = false
  var state = { ready: false, allowed: false }
  window.mariannaPrivacy = state

  function update() {
    var api = window._iub && window._iub.cs && window._iub.cs.api
    var allowed = false
    if (ready && api && typeof api.getPreferences === "function") {
      try {
        var preferences = api.getPreferences()
        // US flags describe permission, not opt-out. An empty result on a
        // first visit permits tracking only after the CMP has become ready.
        allowed = !!preferences && typeof preferences === "object" &&
          !navigator.globalPrivacyControl &&
          ["s", "sh", "adv"].every(function (purpose) {
            return !preferences.uspr || preferences.uspr[purpose] !== false
          })
      } catch (_) {
        allowed = false
      }
    }
    if (state.ready !== ready || state.allowed !== allowed) {
      state.ready = ready
      state.allowed = allowed
      window.dispatchEvent(new Event("marianna:privacy"))
    }
  }

  window._iub = window._iub || []
  var config = window._iub.csConfiguration = window._iub.csConfiguration || {}
  // vercel.app is a public suffix. Iubenda's inferred .vercel.app cookie
  // domain is rejected, so previews must store consent on their own host.
  if (window.location.hostname.endsWith(".vercel.app")) {
    config.localConsentDomainExact = true
  }
  var callbacks = config.callback = config.callback || {}
  ;["onReady", "onPreferenceExpressed", "onPreferenceExpressedOrNotNeeded"].forEach(function (name) {
    var previous = callbacks[name]
    callbacks[name] = function () {
      if (name === "onReady") ready = true
      update()
      // Read once more after the CMP completes its current callback cycle.
      Promise.resolve().then(update)
      if (typeof previous === "function") previous.apply(this, arguments)
    }
  })
  window.addEventListener("pageshow", update)
  window.addEventListener("focus", update)
})()
