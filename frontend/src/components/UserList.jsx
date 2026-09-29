import { Search, UsersRound } from 'lucide-react'
import UserRow from './UserRow'

export default function UserList({ users, search, onSearchChange, onEdit, onDelete, loading }) {
  return (
    <section className="card">
      <div className="mb-5 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-slate-100">Users</h2>

        <div className="relative w-full sm:max-w-[280px]">
          <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            className="form-input pr-9"
            placeholder="Search by name or email..."
            aria-label="Search users"
          />
        </div>
      </div>

      {loading ? (
        <div className="space-y-2">
          <div className="h-[60px] animate-shimmer rounded-lg bg-[linear-gradient(90deg,#0f172a_25%,#1e293b_37%,#0f172a_63%)] bg-[length:400%_100%]" />
          <div className="h-[60px] animate-shimmer rounded-lg bg-[linear-gradient(90deg,#0f172a_25%,#1e293b_37%,#0f172a_63%)] bg-[length:400%_100%]" />
          <div className="h-[60px] animate-shimmer rounded-lg bg-[linear-gradient(90deg,#0f172a_25%,#1e293b_37%,#0f172a_63%)] bg-[length:400%_100%]" />
        </div>
      ) : users.length === 0 ? (
        <div className="py-12 text-center text-slate-500">
          <UsersRound className="mx-auto mb-3 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-base" size={40} strokeWidth={1.5} />
          <p>{search ? 'No users match your search.' : 'No users registered yet.'}</p>
        </div>
      ) : (
        users.map((user) => (
          <UserRow key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
        ))
      )}
    </section>
  )
}
