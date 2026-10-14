"use client"

import * as React from "react"

// Visual effects switch for the lain pages. Effects are off by default, persisted in
// localStorage, and always off when the visitor prefers reduced motion.

const KEY = "lain-fx"
const REDUCED = "(prefers-reduced-motion: reduce)"

type Fx = { fx: boolean; reduced: boolean; setFx: (on: boolean) => void }

const FxContext = React.createContext<Fx>({ fx: false, reduced: false, setFx: () => {} })

export function useFx() {
  return React.useContext(FxContext)
}

function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(REDUCED)
  mq.addEventListener("change", cb)
  return () => mq.removeEventListener("change", cb)
}

export function FxRoot({ className, children }: { className?: string; children: React.ReactNode }) {
  const reduced = React.useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED).matches,
    () => false,
  )
  // null until localStorage has been read, so nothing animates before we know
  const [pref, setPref] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    setPref(localStorage.getItem(KEY) === "on")
  }, [])

  const setFx = React.useCallback((on: boolean) => {
    setPref(on)
    localStorage.setItem(KEY, on ? "on" : "off")
  }, [])

  const fx = pref === true && !reduced
  const value = React.useMemo(() => ({ fx, reduced, setFx }), [fx, reduced, setFx])

  return (
    <FxContext.Provider value={value}>
      <div className={className} data-fx={fx ? "on" : "off"}>
        {children}
        <div className="lain-crt" aria-hidden />
        <div className="lain-grain" aria-hidden />
      </div>
    </FxContext.Provider>
  )
}

export function FxToggle() {
  const { fx, reduced, setFx } = useFx()
  return (
    <button
      type="button"
      className="lain-square"
      onClick={() => setFx(!fx)}
      disabled={reduced}
      aria-pressed={fx}
      title={reduced ? "effects disabled: reduced motion" : "toggle visual effects"}
    >
      fx:{fx ? "on" : "off"}
    </button>
  )
}
