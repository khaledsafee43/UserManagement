# User Management — React + Tailwind CSS

This project converts the original HTML/CSS/JavaScript User Management UI to React with reusable components and Tailwind CSS.

## Components

- `Header.jsx` — top header and registered-user count
- `UserForm.jsx` — create/update user form
- `UserList.jsx` — user list, search and loading/empty states
- `UserRow.jsx` — individual user row with edit/delete actions
- `Toast.jsx` — success/error notifications
- `App.jsx` — API state and CRUD orchestration

## API

The original API URL is preserved:

`http://localhost:1212/api/users`

Expected endpoints:

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

Make sure your Node.js backend is running on port `1212`.
