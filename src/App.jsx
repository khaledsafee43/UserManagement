import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import Toast from './components/Toast'

const API_URL = 'http://localhost:1212/api/users'

export default function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [editingUser, setEditingUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState(null)

  function showToast(message, type = 'success') {
    setToast({ message, type })
    window.setTimeout(() => setToast(null), 3000)
  }

  async function showUsers() {
    setLoading(true)
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Failed to fetch users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(error)
      showToast('Could not load users. Check that the backend is running.', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    showUsers()
  }, [])

  const filteredUsers = useMemo(() => {
    const value = search.toLowerCase().trim()
    if (!value) return users

    return users.filter((user) =>
      user.name?.toLowerCase().includes(value) || user.email?.toLowerCase().includes(value),
    )
  }, [users, search])

  async function handleSubmit(form) {
    setSaving(true)
    try {
      const isEditing = editingUser !== null
      const response = await fetch(isEditing ? `${API_URL}/${editingUser.id}` : API_URL, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        let message = 'Operation failed'
        try {
          const error = await response.json()
          message = error.error || message
        } catch {
          // Keep the default message when the API does not return JSON.
        }
        throw new Error(message)
      }

      setEditingUser(null)
      await showUsers()
      showToast(isEditing ? 'User updated successfully.' : 'User created successfully.')
      return true
    } catch (error) {
      console.error(error)
      showToast(error.message || 'Operation failed.', 'error')
      return false
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this user?')) return

    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Delete failed')
      if (editingUser?.id === id) setEditingUser(null)
      await showUsers()
      showToast('User deleted successfully.')
    } catch (error) {
      console.error(error)
      showToast(error.message || 'Delete failed.', 'error')
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Header userCount={users.length} />

      <main className="mx-auto w-full max-w-[1100px] px-3 py-7 sm:px-4 sm:py-9 lg:py-12">
        <div className="mb-6 sm:mb-8">
          <h1 className="mb-2 text-[25px] font-bold sm:text-[30px]">Users</h1>
          <p className="text-sm text-gray-500 sm:text-[15px]">Add and view registered users in the system</p>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(280px,340px)_minmax(0,1fr)]">
          <UserForm editingUser={editingUser} onSubmit={handleSubmit} loading={saving} />
          <UserList
            users={filteredUsers}
            search={search}
            onSearchChange={setSearch}
            onEdit={setEditingUser}
            onDelete={handleDelete}
            loading={loading}
          />
        </div>
      </main>

      <Toast toast={toast} />
    </div>
  )
}
