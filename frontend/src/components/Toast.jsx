export default function Toast({ toast }) {
  if (!toast) return null

  return (
    <div className={`fixed bottom-6 left-6 z-50 max-w-[calc(100%-48px)] rounded-xl border px-5 py-3 text-sm text-white shadow-2xl backdrop-blur sm:left-6 ${toast.type === 'error' ? 'border-red-500/30 bg-red-500/15 text-red-200 shadow-red-500/10' : 'border-cyan-400/20 bg-slate-900/95 text-slate-100 shadow-blue-500/10'}`}>
      {toast.message}
    </div>
  )
}
