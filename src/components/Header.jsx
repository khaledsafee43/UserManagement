import { UserRound } from 'lucide-react'

export default function Header({ userCount }) {
  return (
    <header className="flex w-full items-center justify-between gap-4 border-b border-gray-200 bg-white px-4 py-5 sm:px-5">
      <div className="flex items-center gap-2 font-medium text-gray-900">
        <UserRound size={22} strokeWidth={2} />
        <span>User Management</span>
      </div>

      <div className="whitespace-nowrap rounded-full bg-gray-50 px-3.5 py-2 text-sm text-gray-500">
        User Registered <span className="ml-1 font-semibold text-gray-700">{userCount}</span>
      </div>
    </header>
  )
}
