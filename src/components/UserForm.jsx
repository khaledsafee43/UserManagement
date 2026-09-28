import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  age: "",
  userRoll: "",
};

export default function UserForm({ editingUser, onSubmit, loading }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editingUser) {
      setForm({
        name: editingUser.name ?? "",
        email: editingUser.email ?? "",
        age: editingUser.age ?? "",
        userRoll: editingUser.userRoll ?? "",
      });
    } else {
      setForm(initialForm);
    }
  }, [editingUser]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const success = await onSubmit(form);
    if (success) setForm(initialForm);
  }

  return (
    <section className="card">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-5 text-lg font-semibold text-slate-100">
          {editingUser ? "Edit User" : "Add New User"}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-sm font-medium text-slate-200"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Sara Sarvari"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="form-input"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="mb-1.5 block text-sm font-medium text-slate-200"
          >
            Age
          </label>
          <input
            id="age"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="form-input"
            placeholder="24 years old"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="roll"
            className="mb-1.5 block text-sm font-medium text-slate-200"
          >
            User Roll
          </label>
          <select
            id="roll"
            name="userRoll"
            value={form.userRoll}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              Select User Roll
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" disabled={loading} className="primary-button">
          {loading ? "Saving..." : editingUser ? "Update" : "New User"}
        </button>
      </form>
    </section>
  );
}
