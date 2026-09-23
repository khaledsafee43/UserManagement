export default function UsersList() {
  return (
    <section className="w-full min-w-0 bg-[#ffffff] rounded-xl shadow-md p-6">
      <div class="list-header">
        <h2>Users not registered</h2>
        <div class="search-box">
          <span class="search-icon">🔎</span>
          <input
            type="text"
            id="searchInput"
            placeholder="search by name or email... "
          />
        </div>
      </div>
      <div id="listContainer">
        <div class="user-row">
          <div class="user-info">
            <div class="user-name">Khaled</div>
            <div class="user-email">saifee@gmail.com</div>
          </div>
          <span class="badge ${badgeClass}">badgeText</span>
          <span class="row-date">createdAt</span>
          <div class="row-actions">
            <button
              class="icon-btn edit"
              title="edit"
              data-action="edit"
              data-id="${user.id}"
            >
              🖊️
            </button>
            <button
              class="icon-btn delete"
              title="remove"
              data-action="delete"
              data-id="${user.id}"
            >
              🗑️
            </button>
          </div>
        </div>
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
      </div>
    </section>
  );
}
