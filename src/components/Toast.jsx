export default function Toast({ toast }) {
  if (!toast) return null

  return (
    <div className={`fixed bottom-6 left-6 z-50 max-w-[calc(100%-48px)] rounded-lg px-5 py-3 text-sm text-white shadow-lg sm:left-6 ${toast.type === 'error' ? 'bg-red-500' : 'bg-gray-900'}`}>
      {toast.message}
    </div>
  )
}
