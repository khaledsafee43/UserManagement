import { Pencil, Trash2 } from "lucide-react";

export default function UserRow({ user, onEdit, onDelete }) {
  const isAdmin = user.userRoll === "admin";

  return (
    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b border-gray-200 px-1 py-3.5 transition hover:bg-gray-50 sm:flex sm:gap-3.5 last:border-b-0 animate-fadeIn">
      <div className="min-w-0 sm:flex-1">
        <div className="mb-0.5 truncate text-sm font-semibold text-gray-900">
          {user.name}
        </div>
        <div className="truncate text-[13px] text-gray-500">{user.email}</div>
        <div className="truncate text-[13px] text-gray-500">
          Age: {user.age}
        </div>
      </div>

      <span
        className={`row-start-1 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap sm:row-auto ${isAdmin ? "bg-emerald-50 text-emerald-500" : "bg-gray-100 text-gray-500"}`}
      >
        {isAdmin ? "Admin" : "Simple User"}
      </span>

      <div className="col-start-2 row-start-2 flex justify-end gap-1.5 sm:col-auto sm:row-auto">
        <button
          type="button"
          className="icon-button"
          title="Edit"
          aria-label={`Edit ${user.name}`}
          onClick={() => onEdit(user)}
        >
          <Pencil size={16} />
        </button>
        <button
          type="button"
          className="icon-button hover:bg-red-50 hover:text-red-500"
          title="Remove"
          aria-label={`Delete ${user.name}`}
          onClick={() => onDelete(user.id)}
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
