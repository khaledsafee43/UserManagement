export default function AddUser() {
  return (
    <section className="w-full min-w-0 bg-[#ffffff] rounded-xl shadow-md p-6">
      <form id="userForm">
        <h2 className="text-lg font-semibold mb-5 m-0">Add New User</h2>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium mb-1.5 color-[#111827]"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Sara Sarvari"
            className="w-full max-w-full py-2.5 px-3.5 border border-[#e5e7eb] rounded-lg font-serif text-xs bg-[#ffffff] text-[#111827] transition-[border-color,box-shadow] duration-200 ease-in focus:outline-none focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.12)]"
          />
        </div>
        <div class="field">
          <label
            for="email"
            className="block text-sm font-medium mb-1.5 color-[#111827]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            className="w-full max-w-full py-2.5 px-3.5 border border-[#e5e7eb] rounded-lg font-serif text-xs bg-[#ffffff] text-[#111827] transition-[border-color,box-shadow] duration-200 ease-in focus:outline-none focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.12)]"
          />
        </div>
        <div class="field">
          <label
            for="age"
            className="block text-sm font-medium mb-1.5 color-[#111827]"
          >
            Age
          </label>
          <input
            type="text"
            id="age"
            placeholder="24 years old"
            className="w-full max-w-full py-2.5 px-3.5 border border-[#e5e7eb] rounded-lg font-serif text-xs bg-[#ffffff] text-[#111827] transition-[border-color,box-shadow] duration-200 ease-in focus:outline-none focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.12)]"
          />
        </div>
        <div class="field">
          <label
            for="roll"
            className="block text-sm font-medium mb-1.5 color-[#111827]"
          >
            User Roll
          </label>
          <select
            id="roll"
            className="w-full max-w-full py-2.5 mb-4 px-3.5 border border-[#e5e7eb] rounded-lg font-serif text-xs bg-[#ffffff] text-[#111827] transition-[border-color,box-shadow] duration-200 ease-in focus:outline-none focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.12)]"
          >
            <option selected disabled>
              Select User Roll
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#7c3aed] active:scale-[0.98] text-[#fff] border-none py-3 px-3.5 rounded-lg font-serif font-semibold cursor-pointer transition-[border-color,box-shadow] duration-200 ease-in hover:bg-[#6d28d9]"
          id="submitBtn"
        >
          New User
        </button>
      </form>
    </section>
  );
}
