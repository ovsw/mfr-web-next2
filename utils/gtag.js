import { trackingAllowed } from "./privacy"

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

function clearAnalyticsCookies() {
  const domains = window.location.hostname.split(".")
  document.cookie.split(";").forEach(cookie => {
    const name = cookie.split("=")[0].trim()
    if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) return
    const expired = `${name}=; Max-Age=0; path=/`
    document.cookie = expired
    for (let i = 0; i < domains.length - 1; i++) {
      document.cookie = `${expired}; domain=${domains.slice(i).join(".")}`
    }
  })
}

// The disable flag also stops automatic GA events after the library has loaded.
export function syncAnalytics() {
  if (!GA_TRACKING_ID) return
  const allowed = trackingAllowed()
  window[`ga-disable-${GA_TRACKING_ID}`] = !allowed
  if (!allowed) {
    clearAnalyticsCookies()
    return
  }
  if (document.getElementById("marianna-ga")) return
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments)
    }
  window.gtag("js", new Date())
  window.gtag("config", GA_TRACKING_ID, {
    page_path: window.location.pathname + window.location.search,
  })
  const script = document.createElement("script")
  script.id = "marianna-ga"
  script.async = true
  // This script is gated here, including withdrawal, instead of by autoblocking.
  script.setAttribute("data-cmp-ab", "1")
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script)
}

export const pageview = url => {
  if (
    !trackingAllowed() ||
    !GA_TRACKING_ID ||
    typeof window.gtag !== "function"
  )
    return
  window.gtag("config", GA_TRACKING_ID, { page_path: url })
}

export const event = ({ action, category, label, value }) => {
  if (
    !trackingAllowed() ||
    !GA_TRACKING_ID ||
    typeof window.gtag !== "function"
  )
    return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}
