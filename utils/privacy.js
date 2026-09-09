import { useEffect, useState } from "react"

export const trackingAllowed = () =>
  typeof window !== "undefined" &&
  window.mariannaPrivacy?.allowed === true &&
  !navigator.globalPrivacyControl

export function useTrackingAllowed() {
  const [allowed, setAllowed] = useState(false)
  useEffect(() => {
    const update = () => setAllowed(trackingAllowed())
    update()
    window.addEventListener("marianna:privacy", update)
    return () => window.removeEventListener("marianna:privacy", update)
  }, [])
  return allowed
}
