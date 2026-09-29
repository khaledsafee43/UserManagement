import { Pencil, Trash2 } from 'lucide-react'

export default function UserRow({ user, onEdit, onDelete }) {
  const isAdmin = user.userRoll === 'admin'

  return (
    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b border-slate-800/80 px-1 py-3.5 transition hover:bg-slate-800/30 sm:flex sm:gap-3.5 last:border-b-0 animate-fadeIn">
      <div className="min-w-0 sm:flex-1">
        <div className="mb-0.5 truncate text-sm font-semibold text-slate-100">{user.name}</div>
        <div className="truncate text-[13px] text-slate-400">{user.email}</div>
        <div className="truncate text-[13px] text-slate-400">Age: {user.age}</div>
      </div>

      <span className={`row-start-1 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap sm:row-auto ${isAdmin ? 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20' : 'bg-slate-800 text-slate-400 ring-1 ring-slate-700'}`}>
        {isAdmin ? 'Admin' : 'Simple User'}
      </span>

      <div className="col-start-2 row-start-2 flex justify-end gap-1.5 sm:col-auto sm:row-auto">
        <button type="button" className="icon-button" title="Edit" aria-label={`Edit ${user.name}`} onClick={() => onEdit(user)}>
          <Pencil size={16} />
        </button>
        <button type="button" className="icon-button hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-300" title="Remove" aria-label={`Delete ${user.name}`} onClick={() => onDelete(user.id)}>
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  )
}
