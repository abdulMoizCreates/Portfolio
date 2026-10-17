import { useCallback, useState } from 'react'
import { CheckCircle2, Info, X } from 'lucide-react'
import { ToastContext } from './useToast'

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ title, description, variant = 'success', duration = 3800 }) => {
    const id = `${Date.now()}-${Math.random()}`
    setToasts((current) => [...current, { id, title, description, variant }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id))
    }, duration)
  }, [])

  const dismiss = (id) => setToasts((current) => current.filter((t) => t.id !== id))

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div
        className="no-print pointer-events-none fixed inset-x-4 bottom-4 z-[100] flex flex-col items-center gap-2 sm:inset-x-auto sm:right-6 sm:items-end"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="toast-in pointer-events-auto flex w-full max-w-80 items-start gap-3 rounded-2xl bg-[#121614]/95 p-4 shadow-[0_28px_70px_-16px_rgb(0_0_0/0.8)] backdrop-blur-xl"
          >
            {t.variant === 'success' ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" aria-hidden="true" />
            ) : (
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{t.title}</p>
              {t.description && <p className="mt-0.5 text-xs leading-relaxed text-faint">{t.description}</p>}
            </div>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => dismiss(t.id)}
              className="shrink-0 rounded-full p-1 text-faint transition-colors hover:bg-ink/10 hover:text-ink"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider
